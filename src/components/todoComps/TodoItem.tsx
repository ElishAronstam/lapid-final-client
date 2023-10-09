import ITask from "../../types/ITask";
import {IconButton, TableCell, TableRow, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import NoteIcon from '@mui/icons-material/Note';
import useActionHook  from "../../features/customHooks/useActionHook";

interface ITaskProps{
    task:ITask;
}
const TodoItem=(props:ITaskProps)=>{
    const task=props.task;
    const {deleteTaskFromStore, viewTaskDetails}=useActionHook();

  return(
      <TableRow>
          <TableCell>
              {task.id}
          </TableCell>
          <TableCell>
              {task.priority}
          </TableCell>
          <TableCell>
              {task.title}
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

          <TableCell >
              <Tooltip title="Delete" arrow>
                  <IconButton onClick={() => deleteTaskFromStore(task.id)}>
                      <DeleteIcon />
                  </IconButton>
              </Tooltip>
              <Tooltip title="View" arrow>
                  <IconButton onClick={() => viewTaskDetails(task.id)}>
                      <NoteIcon />
                  </IconButton>
              </Tooltip>
          </TableCell>
      </TableRow>
  )
}

export default TodoItem;