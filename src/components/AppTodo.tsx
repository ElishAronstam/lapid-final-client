import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import app from "../App";

export default function AppTodo() {
    return (
        <div className='container'>
            <h1 className='display-4'>Todo list app</h1>
            <TodoList />
            <TodoInput />
        </div>
    )
}
