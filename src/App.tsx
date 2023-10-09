import React from 'react';
import logo from './logo.svg';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import taskSlice from './features/task/taskSlice'
import AppRoutes from "./components/generalComps/AppRoutes";

const myStore = configureStore({
    reducer: {
        taskSlice:taskSlice
    }
})

function App() {
    return (
        <Provider store={myStore}>
          <AppRoutes />
        </Provider>
    );
}
export type RootState = ReturnType<typeof myStore.getState>;
export default App;
