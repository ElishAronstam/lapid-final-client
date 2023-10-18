import {TableBody} from "@mui/material";
import ITask from "../../types/ITask";
import TaskItem from "../taskComps/TaskItem";

interface IProps {
    tasks: ITask[];
}


const TasksTable = (props: IProps) => {

    return (<TableBody>
        {props.tasks.map((task: ITask, index: number) => {
            return <TaskItem key={index} task={task}/>
        })}
    </TableBody>);
};

export default TasksTable;