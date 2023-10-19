import {RootState} from "../../../app/store";

export const toggleFilterByPrioritySelector = (state: RootState) => state.filterSlice.filterTaskByHighPriority;

export const toggleFilterByStatusSelector = (state: RootState) => state.filterSlice.filterTaskByOpenStatus;
