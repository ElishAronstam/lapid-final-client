import TasksTable from "./TasksTable";
import TasksTableHead from "./TasksTableHead";
import {Paper, Table, TableContainer, Typography, TypographyVariant} from "@mui/material";
import useGetDataHook from "../../features/redux/customHooks/useGetDataHook";
import {useSelector} from "react-redux";
import {selectItemCount} from "../../features/redux/task/taskSelectors";

const TasksTableContainer = () => {
    const tasksCount = useSelector(selectItemCount);
    const titles = ["Type", "Priority", "Title", "Description", "Estimated Time", "End Time", "Review", "Status", "Time Spent", "Actions"];
    const tasks = useGetDataHook();

    return (<>
        <Typography variant={'h2'}>There are currently: {tasksCount} Tasks</Typography>
        <TableContainer component={Paper} sx={{margin: 4, maxWidth: 1000}}> // TODO: move sx to const
            <Table>
                <TasksTableHead titles={titles}/>
                <TasksTable tasks={tasks}/>
            </Table>
        </TableContainer>
    </>);
};

export default TasksTableContainer;