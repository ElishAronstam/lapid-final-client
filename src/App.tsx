import React from 'react';
import logo from './logo.svg';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import   AppTodo  from './components/AppTodo'
import taskSlice from './features/task/taskSlice'
import './App.css';

const myStore = configureStore({
  reducer:{
    taskSlice
  }
})
function App() {
  return (
      <Provider store={myStore}>
        <AppTodo />
      </Provider>
  );
}

export default App;
