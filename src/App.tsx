import React from 'react';
import logo from './logo.svg';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import taskSlice from './features/task/taskSlice'
import AppTodo from "./components/todoComps/AppTodo";

const myStore = configureStore({
    reducer: {
        taskSlice:taskSlice
    }
})

function App() {
    return (
        <Provider store={myStore}>
          <AppTodo />
        </Provider>
    );
}
export type RootState = ReturnType<typeof myStore.getState>;
export default App;
