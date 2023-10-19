import Task from "../../../types/Task";
import {useSelector} from "react-redux";
import {selectTasks} from "../task/taskSelectors";

const useGetTasksHook = () => {
    const tasks: Array<Task> = useSelector(selectTasks);

    return tasks;
};

export default useGetTasksHook;