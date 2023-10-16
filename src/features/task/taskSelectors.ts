import {RootState} from "../../App";
import {createSelector} from "@reduxjs/toolkit";

export const selectTasks = (state: RootState) => state.taskSlice.tasks;

export const selectItemCount = createSelector([selectTasks], (items) => items.length);

export const selectCurrentTask = (state: RootState) => {
    return state.taskSlice.tasks.find((task) => task.id === state.taskSlice.currentTaskId);
};

export const openFormDialogBoxSelector = (state: RootState) => state.taskSlice.openFormDialogBox;

export const openReadDialogBoxSelector = (state: RootState) => state.taskSlice.openReadDialogBox;