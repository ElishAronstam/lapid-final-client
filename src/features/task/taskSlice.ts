import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getInitTasks} from "./helper";
import {ITask} from "../../types/taskTypes";
import {stat} from "fs";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getInitTasks()
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },

        delSingleTask(state, action) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload.id
            )
        },

        updateTask(state, action) {
            let newTodoList: ITask[] = state.tasks;
            newTodoList = newTodoList.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload;
                } else {
                    return task;
                }
            });

            state.tasks = newTodoList;
        }
    }
});

export const selectTasks = (state: any) => state.tasks;

export const {addTask, delSingleTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;