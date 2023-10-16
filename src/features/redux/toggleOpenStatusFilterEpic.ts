import {Epic, ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators';
import {TOGGLE_OPEN_STATUS_FILTER} from "../../types/actionTypes"
import {toggleFilterByStatus} from "../task/taskSlice";


const toggleHighPriorityFilterEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_OPEN_STATUS_FILTER),
        switchMap(() => {
                return [toggleFilterByStatus()]
            }
        )
    );

export default toggleHighPriorityFilterEpic;
