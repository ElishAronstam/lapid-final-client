import TodoTableContainer from '../tableComps/TodoTableContainer';
import AddButton from "../menuBarComps/AddButton";
import Header from "../generalComps/Header";
import OpenFormDialogBox from "../dialogComps/OpenFormDialogBox";
import OpenReadDialogBox from "../dialogComps/OpenReadDialogBox";
import Search from "../menuBarComps/Search";
import QuickFilters from "../menuBarComps/QuickFilters";


const AppTodo = () => {

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
            <Search/>
            <QuickFilters/>
            <TodoTableContainer/>
            <AddButton/>

            {/* Prompted Components*/}
            <OpenFormDialogBox/>
            <OpenReadDialogBox/>
        </div>

    )
}

export default AppTodo;
