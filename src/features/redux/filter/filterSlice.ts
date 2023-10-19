import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TOGGLE_FILTER} from "../actions";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filterTaskByOpenStatus: false,
        filterTaskByHighPriority: false,
        searchQuery: "",
    },

    reducers: {

        toggleFilterByPriority: (state) => {
            state.filterTaskByHighPriority = !state.filterTaskByHighPriority;
        },

        toggleFilterByStatus: (state) => {
            state.filterTaskByOpenStatus = !state.filterTaskByOpenStatus;
        },

        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    }
});


export const {
    toggleFilterByPriority,
    toggleFilterByStatus,
    setSearchQuery
} = filterSlice.actions;

export default filterSlice.reducer;