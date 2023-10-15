import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        filterTaskByOpenStatus: false,
        filterTaskByHighPriority: false,
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

        setTasks(state, action:PayloadAction<ITask[]>) {
            state.tasks=action.payload;
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
        },

        toggleFilterByPriority:(state) => {
            state.filterTaskByHighPriority=!state.filterTaskByHighPriority;
        },

        toggleFilterByStatus:(state) => {
            state.filterTaskByOpenStatus=!state.filterTaskByOpenStatus;
        },

    }
});


export const {addTask, delSingleTask, updateCurrentTaskId, openFormDialogBox, closeFormDialogBox, openReadDialogBox, closeReadDialogBox, setTasks, toggleFilterByPriority,toggleFilterByStatus} = taskSlice.actions;

export default taskSlice.reducer;