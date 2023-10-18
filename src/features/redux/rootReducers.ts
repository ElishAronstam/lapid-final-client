import {combineReducers} from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import filterReducer from "./filter/filterSlice";

const rootReducers = combineReducers({
    taskSlice: taskReducer,
    filterSlice: filterReducer,
});

export default rootReducers;