import { useDispatch } from 'react-redux';
import Task from '../../../types/Task';
import {
  addTask,
  deleteSingleTask,
  openConfirmationDialogBox,
  openReadDialogBox,
  updateCurrentTaskId,
  updateTaskIdToDelete,
} from '../task/taskSlice';

const useActionHook = () => {
  const dispatch = useDispatch();

  const addTaskToStore = (task: Task) => {
    dispatch(addTask(task));
  };

  const deleteTaskFromStore = (taskId: string) => {
    dispatch(deleteSingleTask(taskId));
  };

  const viewTaskDetails = (taskId: string) => {
    dispatch(updateCurrentTaskId(taskId));
    dispatch(openReadDialogBox());
  };

  const showConfirmation = (taskId: string) => {
    dispatch(updateTaskIdToDelete(taskId));
    dispatch(openConfirmationDialogBox());
  };

  return { addTaskToStore, deleteTaskFromStore, viewTaskDetails, showConfirmation };
};

export default useActionHook;
