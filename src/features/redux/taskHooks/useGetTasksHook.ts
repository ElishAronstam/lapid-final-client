import Task from "../../../types/Task";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../task/taskSelectors";
import {useEffect, useState} from "react";
import {setTasks} from "../task/taskSlice";
import { useQuery } from '@apollo/client';
import { ALL_TASKS } from '../../../graphql/task';

const useGetTasksHook = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(ALL_TASKS);

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data.tasks));
    }
  }, [data, dispatch]);

  // Handle loading and error states here
  // if (loading) {
  //   return { loading: true, error: null, tasks: [] };
  // }
  //
  // if (error) {
  //   return { loading: false, error: `Error! ${error.message}`, tasks: [] };
  // }

  // If data is available, return it
  // const tasks = data.tasks;
  // return { loading: false, error: null, tasks };


    // async function fetchDataAndUseData() {
    //             try {
    //               const { loading, error, data } = await useQuery(ALL_TASKS);
    //               if (loading) return 'Loading...';
    //               if (error) return `Error! ${error.message}`;
    //               console.log(data.tasks);;
    //
    //               console.log(data.tasks);
    //
    //               return data.tasks;
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }
    //         fetchDataAndUseData().then(data =>  console.log(data));

    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     async function fetchDataAndUseData() {
    //         try {
    //             const data = await fetchData();
    //             return data
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchDataAndUseData().then(data =>  dispatch(setTasks(data)));
    // },[dispatch])
};

export default useGetTasksHook;