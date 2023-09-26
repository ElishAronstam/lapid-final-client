import React from 'react';
import logo from './logo.svg';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import AppTodo from './components/todoComps/AppTodo'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import taskSlice from './features/task/taskSlice'
import './App.css';
import TodoInput from "./components/todoComps/TodoInput";
import TodoList from "./components/todoComps/TodoList";

const myStore = configureStore({
    reducer: {
        taskSlice
    }
})

function App() {
    return (
        <Provider store={myStore}>
            <BrowserRouter>
                <div className='App'>
                    <Routes>
                        <Route index element={<AppTodo/>}/>
                        <Route path="/todoInput" element={<TodoInput />} />
                        <Route path="/todoList" element={<TodoList />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
