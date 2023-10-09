
import TodoTableContainer from '../tableComps/TodoTableContainer';
import Add from "../generalComps/Add";
import Header from "../generalComps/Header";
import {useSelector} from "react-redux";
import {selectItemCount} from "../../features/task/taskSlice";

export default function AppTodo() {
    const tasksCount=useSelector(selectItemCount);
    //TODO: check how many open tasks there are or in progress
    
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Header/>
            <h2>There are currently: {tasksCount} tasks</h2>
            <TodoTableContainer/>
            <Add/>
        </div>

    )
}
