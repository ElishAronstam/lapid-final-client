import React from 'react';
import {Provider} from 'react-redux';
import {myStore} from "./store";
import Header from "../components/Header/Header";
import Search from "../components/MenuBar/Search";
import QuickFilters from "../components/MenuBar/QuickFilters";
import TasksTableContainer from "../components/Table/TasksTableContainer";
import AddButton from "../components/MenuBar/AddButton";
import OpenFormDialogBox from "../components/Dialog/OpenFormDialogBox";
import OpenReadDialogBox from "../components/Dialog/OpenReadDialogBox";
import {Container} from "@mui/material";
import ConfirmationDialog from "../components/Dialog/ConfirmationDialog";

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

function App() {
    return (
        <Provider store={myStore}>
            <Container
                sx={containerStyles}
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
                <ConfirmationDialog/>
            </Container>
        </Provider>
    );
};

export default App;
