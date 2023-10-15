import {Epic, ofType} from 'redux-observable';
import { switchMap, map, tap } from 'rxjs/operators';
import {TOGGLE_OPEN_STATUS_FILTER} from "../../types/actionTypes"
import {toggleFilterByStatus} from "../task/taskSlice";


const toggleHighPriorityFilterEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_OPEN_STATUS_FILTER),
        switchMap((action)=>{return [toggleFilterByStatus()]}
        )
    );

export default toggleHighPriorityFilterEpic;
