import Task from "../../../types/Task";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../task/taskSelectors";
import {useEffect, useState} from "react";
import {fetchData} from "../../../service/taskAPI";
import {setTasks} from "../task/taskSlice";


const useGetTasksHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        async function returnData() {
            try {
                const data = await fetchData();
                return data
            } catch (error) {
                console.error(error);
            }
        }
        returnData().then(data =>  dispatch(setTasks(data)));
    },[dispatch])
};

export default useGetTasksHook;