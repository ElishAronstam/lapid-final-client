import {Epic, ofType} from 'redux-observable';
import {map} from 'rxjs/operators';
import {TOGGLE_FILTER} from "../../types/actionTypes";
import {setTasks} from "./task/taskSlice";
import {filterTasks} from "./task/helper";

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_FILTER),
        map(() => {
            const filteredTasks = filterTasks(state$.value.taskSlice.filterTaskByOpenStatus, state$.value.taskSlice.filterTaskByHighPriority, state$.value.taskSlice.searchQuery);
            return setTasks(filteredTasks);
        })
    );

export default toggleFiltersEpic;
