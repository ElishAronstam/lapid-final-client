import ITask from "../../../types/ITask";
import {useSelector} from "react-redux";
import {selectTasks} from "../task/taskSelectors";

const useGetDataHook = () => {
    const tasks: ITask[] = useSelector(selectTasks);

    return tasks;
}

export default useGetDataHook;