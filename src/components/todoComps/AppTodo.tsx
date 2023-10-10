
import TodoTableContainer from '../tableComps/TodoTableContainer';
import AddButton from "../generalComps/AddButton";
import Header from "../generalComps/Header";
import {useSelector} from "react-redux";
import {selectItemCount} from "../../features/task/taskSlice";

export default function AppTodo() {

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
            {/*TODO: includes search and filter and add button <MenuBar />*/}
            <TodoTableContainer/>
            <AddButton/>
        </div>

    )
}
