import {createEpicMiddleware} from "redux-observable";
import {configureStore} from "@reduxjs/toolkit";
import toggleFiltersEpic from "./toggleFiltersEpic";
import taskReducer from "./task/taskSlice";

const epicMiddleware = createEpicMiddleware();

export const myStore = configureStore({
    reducer: {
        taskSlice:taskReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware) // Apply middleware correctly
});

epicMiddleware.run(toggleFiltersEpic);

export type RootState = ReturnType<typeof myStore.getState>;