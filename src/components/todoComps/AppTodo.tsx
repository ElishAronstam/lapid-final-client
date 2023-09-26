import React from 'react'
import TodoList from './TodoList'
import Add from "../generalComps/Add";
import app from "../../App";

export default function AppTodo() {
    return (
        <div className='container'>
            <h1 className='display-4'>Todo list app</h1>
            {/*<SearchTask />*/}
            <TodoList />
            <Add />
        </div>
    )
}
