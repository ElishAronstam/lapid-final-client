import {useDispatch} from "react-redux";
import ITask from "../../../types/ITask";
import {addTask, delSingleTask, openReadDialogBox, updateCurrentTaskId} from '../task/taskSlice';

const useActionHook = () => {
    const dispatch = useDispatch();

    const addTaskToStore = (task: ITask) => {
        dispatch(addTask(task));
    }

    const deleteTaskFromStore = (taskId: string) => {
        dispatch(delSingleTask(taskId));
    }

    const viewTaskDetails = (taskId: string) => {
        dispatch(updateCurrentTaskId(taskId));
        dispatch(openReadDialogBox());
    }

    return {addTaskToStore, deleteTaskFromStore, viewTaskDetails};
}

export default useActionHook;
