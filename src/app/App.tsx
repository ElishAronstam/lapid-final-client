import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {myStore} from "./store";
import Header from "../components/Header/Header";
import Search from "../components/MenuBar/Search/Search";
import QuickFilters from "../components/MenuBar/QuickFilter/QuickFilters";
import TasksTableContainer from "../components/Table/TasksTableContainer/TasksTableContainer";
import AddButton from "../components/MenuBar/AddButton/AddButton";
import OpenFormDialogBox from "../components/Dialog/OpenFormDialogBox/OpenFormDialogBox";
import OpenReadDialogBox from "../components/Dialog/OpenReadDialogBox/OpenReadDialogBox";
import {Container} from "@mui/material";
import ConfirmationDialog from "../components/Dialog/ConfirmationDialog/ConfirmationDialog";

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
