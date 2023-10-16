import {Epic, ofType} from 'redux-observable';
import {switchMap,tap, filter} from 'rxjs/operators';
import {TOGGLE_FILTER} from "../../types/actionTypes";
import {taskSlice} from "../task/taskSlice";

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_FILTER),
        filter(()=>state$.value.taskSlice.filterTaskByOpenStatus === true),
        tap(()=>console.log("yes"))
        //TODO: action that filters the data according to value in the state

     );

export default toggleFiltersEpic;
