import React from 'react';
import logo from './logo.svg';
import {configureStore, createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import taskSlice from './features/redux/task/taskSlice'
import AppTodo from "./components/todoComps/AppTodo";
import { createEpicMiddleware } from 'redux-observable';
import toggleFiltersEpic from "./features/redux/toggleFiltersEpic";
import {myStore} from "./features/redux/store";

// const epicMiddleware = createEpicMiddleware();
//
// const myStore = configureStore({
//     reducer: {
//         taskSlice:taskSlice
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(epicMiddleware) // Apply middleware correctly
// });
//
// epicMiddleware.run(toggleFiltersEpic);

function App() {
    return (
        <Provider store={myStore}>
          <AppTodo />
        </Provider>
    );
}

export default App;
