import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ToggleFilter} from "../actions";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filterTaskByOpenStatus: false,
        filterTaskByHighPriority: false,
        searchQuery: "",
    },

    reducers: {

        toggleFilter:(state,action:PayloadAction<ToggleFilter>) => {
             const filterParam=action.payload.payload;
             if(filterParam.toString() === 'open') {
                 state.filterTaskByOpenStatus = !state.filterTaskByOpenStatus;
             } else if(filterParam.toString() === 'high'){
                 state.filterTaskByHighPriority = !state.filterTaskByHighPriority;
             } else {
                 state.searchQuery = action.payload.payload;
             }
        },

        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    }
});


export const {
    setSearchQuery,
    toggleFilter,
} = filterSlice.actions;

export default filterSlice.reducer;