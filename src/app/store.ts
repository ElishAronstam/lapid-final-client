import {createEpicMiddleware} from "redux-observable";
import {configureStore} from "@reduxjs/toolkit";
import toggleFiltersEpic from "../features/redux/epics/toggleFiltersEpic";
import rootReducers  from "../features/redux/rootReducers";

const epicMiddleware = createEpicMiddleware();

export const myStore = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(toggleFiltersEpic);

export type RootState = ReturnType<typeof myStore.getState>;