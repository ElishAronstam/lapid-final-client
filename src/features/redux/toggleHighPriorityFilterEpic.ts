import {Epic, ofType} from 'redux-observable';
import { switchMap, map, tap } from 'rxjs/operators';
import {TOGGLE_HIGH_PRIORITY_FILTER} from "../../types/actionTypes"
import {toggleFilterByPriority} from "../task/taskSlice";

const toggleHighPriorityFilterEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_HIGH_PRIORITY_FILTER),
        switchMap((action)=>{return [toggleFilterByPriority()]}
        )
    );
export default toggleHighPriorityFilterEpic;
