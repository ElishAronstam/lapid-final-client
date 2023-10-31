import {Epic, ofType} from 'redux-observable';
import {map,mergeMap} from 'rxjs/operators';
import {setTasks} from "./task/taskSlice";
import {filterTasks} from "../../service/taskAPI";
import { useMutation, useQuery } from '@apollo/client';
import { FILTER_TASKS } from '../../graphql/task';

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType('filters/toggleFilter'),
        mergeMap(() => {
          const { loading, error, data } = useQuery(FILTER_TASKS, {
            variables:{
              statusFilter:state$.value.filterSlice.filterTaskByOpenStatus,
              priorityFilter:state$.value.filterSlice.filterTaskByHighPriority,
              searchWord:state$.value.filterSlice.searchQuery
            }
          });
          console.log(data.filterTasks);
          setTasks(data.filterTasks)
        })
    );

export default toggleFiltersEpic;
