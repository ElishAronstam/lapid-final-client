import {Epic, ofType} from 'redux-observable';
import {map, tap} from 'rxjs/operators';
import {setTasks} from "./task/taskSlice";
import {filterTasks} from "./task/helper";

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType('filters/toggleFilter'),
        map(() => {
            const filteredTasks = filterTasks(state$.value.filterSlice.filterTaskByOpenStatus, state$.value.filterSlice.filterTaskByHighPriority, state$.value.filterSlice.searchQuery);
            return setTasks(filteredTasks);
        })
    );



export default toggleFiltersEpic;
