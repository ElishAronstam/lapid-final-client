import React from 'react';
import logo from './logo.svg';
import {configureStore, createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import taskSlice from './features/task/taskSlice'
import AppTodo from "./components/todoComps/AppTodo";
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from "./features/redux/rootEpic";

const epicMiddleware = createEpicMiddleware();

const myStore = configureStore({
    reducer: {
        taskSlice:taskSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware) // Apply middleware correctly
});

epicMiddleware.run(rootEpic);

function App() {
    return (
        <Provider store={myStore}>
          <AppTodo />
        </Provider>
    );
}
export type RootState = ReturnType<typeof myStore.getState>;
export default App;
