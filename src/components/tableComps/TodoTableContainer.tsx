import TodoTable from "./TodoTable";
import TodoTableHead from "./TodoTableHead";
import {Paper, Table, TableContainer} from "@mui/material";
import useGetDataHook from "../../features/customHooks/useGetDataHook";
import {useSelector} from "react-redux";
import {selectItemCount} from "../../features/task/taskSelectors";

const TodoTableContainer = () => {
    const tasksCount=useSelector(selectItemCount);
    const titles=["Index","Priority","Title","Description","Estimated Time","End Time","Review","Status","Time Spent","Actions"];
    const tasks=useGetDataHook();
    //TODO:function the filters tasks and sends to todo table for display

    return (
        <>
        <h2>There are currently: {tasksCount} Tasks</h2>
        <TableContainer component={Paper} sx={{margin:4, maxWidth:1000}}>

            <Table>
                <TodoTableHead titles={titles}></TodoTableHead>
                <TodoTable tasks={tasks}></TodoTable>
            </Table>
        </TableContainer>
        </>
    )
}
export default TodoTableContainer;