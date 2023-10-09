import ITask from "../../types/ITask";
import {TableCell, TableRow} from "@mui/material";

interface ITaskProps{
    task:ITask;
}
const TodoItem=(props:ITaskProps)=>{
    const task=props.task;

  return(
      <TableRow>
          <TableCell>
              {task.id}
          </TableCell>
          <TableCell>
              {task.priority}
          </TableCell>
          <TableCell>
              {task.description}
          </TableCell>
          <TableCell>
              {task.estimatedTime}
          </TableCell>
          <TableCell>
              {task.endTime}
          </TableCell>
          <TableCell>
              {task.review}
          </TableCell>
          <TableCell>
              {task.status}
          </TableCell>
          <TableCell>
              {task.timeSpent}
          </TableCell>
      </TableRow>
  )
}

export default TodoItem;