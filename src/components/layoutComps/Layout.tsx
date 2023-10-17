import TasksTableContainer from '../tableComps/TasksTableContainer';
import AddButton from "../menuBarComps/AddButton";
import Header from "./header/Header";
import OpenFormDialogBox from "../dialogComps/OpenFormDialogBox";
import OpenReadDialogBox from "../dialogComps/OpenReadDialogBox";
import Search from "../menuBarComps/Search";
import QuickFilters from "../menuBarComps/QuickFilters";


const Layout = () => {

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
            <TasksTableContainer/>
            <AddButton/>

            {/* Prompted Components*/}
            <OpenFormDialogBox/>
            <OpenReadDialogBox/>
        </div>

    )
}

export default Layout;
