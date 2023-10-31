import {Epic, ofType} from 'redux-observable';
import {map,mergeMap, switchMap} from 'rxjs/operators';
import {setTasks} from "./task/taskSlice";
import {filterTasks} from "../../service/taskAPI";
import { useMutation, useQuery } from '@apollo/client';
import { FILTER_TASKS } from '../../graphql/task';
import { client } from '../../index';
import {of} from 'rxjs';

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType('filters/toggleFilter'),
        switchMap( () =>
                client.query({
                    query: FILTER_TASKS,
                    variables: {
                        statusFilter: state$.value.filterSlice.filterTaskByOpenStatus,
                        priorityFilter: state$.value.filterSlice.filterTaskByHighPriority,
                        searchWord: state$.value.filterSlice.searchQuery,
                    }
                })
        ),
        switchMap(response => {
            console.log(response.data);
            return of(setTasks(response.data.filterTasks));
        }),
    );

export default toggleFiltersEpic;

