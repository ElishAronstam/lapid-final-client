
import TasksTableHead from "../TasksTableHead/TasksTableHead";
import {Paper, SxProps, Table, TableBody, TableContainer, Typography, TypographyVariant} from "@mui/material";
import useGetTasksHook from "../../../features/redux/taskHooks/useGetTasksHook";
import {useDispatch, useSelector} from "react-redux";
import {selectItemCount, selectTasks} from "../../../features/redux/task/taskSelectors";
import Task from "../../../types/Task";
import TaskItem from "../../TaskItem/TaskItem";


const TasksTableContainer = () => {

    const dispatch = useDispatch();

    useGetTasksHook();
    const tasksCount = useSelector(selectItemCount);
    const titles = ["Type", "Priority", "Title", "Description", "Estimated Time", "End Time", "Review", "Status", "Time Spent", "Actions"];
    const tasks=useSelector(selectTasks);

    return (<>
        <Typography variant={'h5'}> There are currently: {tasksCount} Tasks</Typography>
        <TableContainer component={Paper} sx={{margin:4}}>
            <Table>
                <TasksTableHead titles={titles}/>
                <TableBody>
                    {tasks.map((task: Task, index: number) =>
                        <TaskItem key={index} task={task}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
};

export default TasksTableContainer;