import {useSelector} from "react-redux";
import {selectItemCount, selectTasks} from "../../features/task/taskSlice";
import ITask from "../../types/ITask";
import TodoTable from "./TodoTable";
import TodoTableHead from "./TodoTableHead";
import {Paper, Table, TableContainer} from "@mui/material";


const TodoTableContainer = () => {
    const tasks: ITask[] = useSelector(selectTasks);
    const titles=["Index","Priority","Description","Estimated Time","End Time","Review","Status","Time Spent"];
    const tasksCount=useSelector(selectItemCount);
    //TODO: check how many open tasks there are or in progress

    return (
        <TableContainer component={Paper} sx={{margin:4, maxWidth:870}}>
            <h2>There are currently: {tasksCount} tasks</h2>
            <Table>
                <TodoTableHead titles={titles}></TodoTableHead>
                <TodoTable tasks={tasks}></TodoTable>
            </Table>
        </TableContainer>
    )
}
export default TodoTableContainer;