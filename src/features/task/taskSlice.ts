import {createSelector, createSlice} from "@reduxjs/toolkit";
import {getInitTasks} from "./helper";
import ITask from "../../types/ITask";
import {RootState} from "../../App";


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getInitTasks(),
        currentTaskId: "",
        openFormDialogBox: false,
        openReadDialogBox: false,
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },

        delSingleTask(state, action) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
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
        },


        //Updates which task id was  pressed by user
        updateCurrentTaskId: (state, action) => {
            state.currentTaskId = action.payload;
        },
        openFormDialogBox: (state) => {
            state.openFormDialogBox = true;
        },

        closeFormDialogBox: (state) => {
            state.openFormDialogBox = false;
        },

        openReadDialogBox: (state) => {
            state.openReadDialogBox = true;
        },

        closeReadDialogBox: (state) => {
            state.openReadDialogBox = false;
        }
    }
});


export const {addTask, delSingleTask, updateCurrentTaskId, openFormDialogBox, closeFormDialogBox, openReadDialogBox, closeReadDialogBox} = taskSlice.actions;

export default taskSlice.reducer;