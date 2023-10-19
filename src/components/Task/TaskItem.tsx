import {IconButton, TableCell, TableRow, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import NoteIcon from '@mui/icons-material/Note';
import useActionHook from "../../features/redux/taskHooks/useActionHook";
import Task from "../../types/Task";
import {getPriorityIcon, getTypeIcon} from "../../utils/iconGenerator";

interface TaskProps {
    task: Task;
}

const TaskItem = ({task}: TaskProps) => {
    const {viewTaskDetails, showConfirmation} = useActionHook();


    return (
        <TableRow>
            <TableCell>
                {getTypeIcon(task.status)}
            </TableCell>
            <TableCell>
                {getPriorityIcon(task.priority)}
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
            { task.endTime?
                <TableCell>
                    {new Date(task.endTime).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        }
                    )}
                </TableCell> :
                <TableCell></TableCell>
            }
            <TableCell>
                {task.review}
            </TableCell>
            <TableCell>
                {task.status}
            </TableCell>
            <TableCell>
                {task.timeSpent}
            </TableCell>

            <TableCell>
                <Tooltip title="Delete" arrow>
                    <IconButton onClick={() => showConfirmation(task.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="View" arrow>
                    <IconButton onClick={() => viewTaskDetails(task.id)}>
                        <NoteIcon/>
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    );
};

export default TaskItem;