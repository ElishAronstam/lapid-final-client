import {TableBody} from "@mui/material";
import ITask from "../../types/ITask";
import TodoItem from "../todoComps/TodoItem";

interface IProps {
    tasks: ITask[];
}


const TodoTable = (props: IProps) => {

    return (<TableBody>
            {props.tasks.map((task: ITask, index: number) => {
                return <TodoItem key={index} task={task}></TodoItem>
            })}
        </TableBody>);
}

export default TodoTable;