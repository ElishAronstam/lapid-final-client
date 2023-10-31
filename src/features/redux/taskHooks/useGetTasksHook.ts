import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../../taskAPI/taskAPI";
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