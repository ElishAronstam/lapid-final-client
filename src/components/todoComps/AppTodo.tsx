
import TodoTableContainer from '../tableComps/TodoTableContainer';
import Add from "../generalComps/Add";
import Header from "../generalComps/Header";

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
            <TodoTableContainer/>
            <Add/>
        </div>

    )
}
