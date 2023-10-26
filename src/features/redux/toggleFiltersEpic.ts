import {Epic, ofType} from 'redux-observable';
import {map,mergeMap} from 'rxjs/operators';
import {setTasks} from "./task/taskSlice";
import {filterTasks} from "../../service/taskAPI";

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType('filters/toggleFilter'),
        mergeMap(() => {
             return filterTasks(state$.value.filterSlice.filterTaskByOpenStatus, state$.value.filterSlice.filterTaskByHighPriority, state$.value.filterSlice.searchQuery)
            .then(filteredTasks => setTasks(filteredTasks));
        })
    );

export default toggleFiltersEpic;
