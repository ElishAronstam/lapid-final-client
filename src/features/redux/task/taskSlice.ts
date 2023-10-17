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
        filterTaskByOpenStatus: false,
        filterTaskByHighPriority: false,
        searchQuery: "",
    },
    reducers: {
        addTask: (state, action:PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        },

        delSingleTask: (state, action:PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            )
        },

        setTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        },

        updateCurrentTaskId: (state, action:PayloadAction<string>) => {
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

        toggleFilterByPriority: (state) => {
            state.filterTaskByHighPriority = !state.filterTaskByHighPriority;
        },

        toggleFilterByStatus: (state) => {
            state.filterTaskByOpenStatus = !state.filterTaskByOpenStatus;
        },
        setSearchQuery:(state,  action:PayloadAction<string>) => {
            state.searchQuery = action.payload;
       }
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
    toggleFilterByPriority,
    toggleFilterByStatus,
    setSearchQuery
} = taskSlice.actions;

export default taskSlice.reducer;