import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import Task from "../../../types/Task";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks:Array<Task>(),
        currentTaskId: "",
        taskIdToDelete:"",
        openFormDialogBox: false,
        openReadDialogBox: false,
        openConfirmationDialogBox:false
    },
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },

        deleteSingleTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            )
        },

        setTasks: (state, action:PayloadAction<Array<Task>>) => {
            state.tasks = action.payload;
        },

        updateCurrentTaskId: (state, action: PayloadAction<string>) => {
            state.currentTaskId = action.payload;
        },
        updateTaskIdToDelete: (state, action: PayloadAction<string>) => {
            state.taskIdToDelete = action.payload;
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
        },
        openConfirmationDialogBox: (state) => {
            state.openConfirmationDialogBox = true;
        },

        closeConfirmationDialogBox: (state) => {
            state.openConfirmationDialogBox = false;
        },

    }
});


export const {
    addTask,
    deleteSingleTask,
    updateCurrentTaskId,
    openFormDialogBox,
    closeFormDialogBox,
    setTasks,
    closeReadDialogBox,
    openReadDialogBox,
    openConfirmationDialogBox,
    closeConfirmationDialogBox,
    updateTaskIdToDelete,
} = taskSlice.actions;

export default taskSlice.reducer;