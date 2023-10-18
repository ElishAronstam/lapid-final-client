import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getInitTasks} from "./helper";
import ITask from "../../../types/ITask";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getInitTasks(),
        currentTaskId: "",
        openFormDialogBox: false,
        openReadDialogBox: false,
    },
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        },

        delSingleTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            )
        },

        setTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        },

        updateCurrentTaskId: (state, action: PayloadAction<string>) => {
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
        },
    }
});


export const {
    addTask,
    delSingleTask,
    updateCurrentTaskId,
    openFormDialogBox,
    closeFormDialogBox,
    openReadDialogBox,
    closeReadDialogBox,
    setTasks,
} = taskSlice.actions;

export default taskSlice.reducer;