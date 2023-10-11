import {createSelector, createSlice} from "@reduxjs/toolkit";
import {getInitTasks} from "./helper";
import ITask from "../../types/ITask";
import {RootState} from "../../App";


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getInitTasks(),
        currentTaskId:"",
        openFormDialogBox:false,
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
        openFormDialogBox:(state)=>{
            state.openFormDialogBox=true;
        },

        closeFormDialogBox:(state)=>{
            state.openFormDialogBox=false;
        }
    }
});

export const selectTasks = (state: RootState) => state.taskSlice.tasks;

export const selectItemCount = createSelector(
    [selectTasks],
    (items) => items.length
);
export const selectCurrentTask = (state: RootState) => {
    return state.taskSlice.tasks.find(
        (task) => task.id === state.taskSlice.currentTaskId
    );
};

export const openFormDialogBoxSelector=(state:RootState)=>state.taskSlice.openFormDialogBox;


export const {addTask, delSingleTask,updateCurrentTaskId, openFormDialogBox, closeFormDialogBox} = taskSlice.actions;

export default taskSlice.reducer;