import TodoTableContainer from '../tableComps/TodoTableContainer';
import AddButton from "../generalComps/AddButton";
import Header from "../generalComps/Header";
import OpenFormDialogBox from "../dialogComps/OpenFormDialogBox";

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
            {/*Main Components*/}
            <Header/>
            {/*TODO: includes search and filter and add button <MenuBar />*/}
            <TodoTableContainer/>
            <AddButton/>

            {/* Prompted Components*/}
            <OpenFormDialogBox/>
        </div>

    )
}
