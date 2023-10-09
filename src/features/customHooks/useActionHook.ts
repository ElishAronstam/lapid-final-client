import {useDispatch} from "react-redux";
import ITask from "../../types/ITask";
import {addTask, delSingleTask, selectItemCount, updateTask} from '../task/taskSlice';

const useActionHook=()=>{
    const dispatch = useDispatch();

    const addTaskToStore=(task:ITask)=>{
        dispatch(addTask(task));
    }

    const deleteTaskFromStore=(taskId:string)=>{
        console.log(taskId);
        dispatch(delSingleTask(taskId));
    }
    //TODO: not sure what to do here
    const viewTaskDetails=(taskId:string)=>{

    }

    return {addTaskToStore, deleteTaskFromStore,viewTaskDetails};
}
export default useActionHook;
