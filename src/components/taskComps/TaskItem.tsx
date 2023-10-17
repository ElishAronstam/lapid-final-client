import ITask from "../../types/ITask";
import {IconButton, TableCell, TableRow, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import NoteIcon from '@mui/icons-material/Note';
import useActionHook from "../../features/redux/customHooks/useActionHook";
import ConfirmationDialog from "../dialogComps/ConfirmationDialog";
import {useState} from "react";

interface ITaskProps {
    task: ITask;
}

const TaskItem = (props: ITaskProps) => {
    const task = props.task;
    const {deleteTaskFromStore, viewTaskDetails} = useActionHook();

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const HandleDeleteItem = (confirmation: boolean) => {
        if (confirmation) {
            deleteTaskFromStore(task.id);
        }
        setIsConfirmationOpen(false);
    }

    return (<TableRow>
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

            <TableCell>
                <Tooltip title="Delete" arrow>
                    <IconButton onClick={() => setIsConfirmationOpen(true)}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="View" arrow>
                    <IconButton onClick={() => viewTaskDetails(task.id)}>
                        <NoteIcon/>
                    </IconButton>
                </Tooltip>
            </TableCell>
            {isConfirmationOpen && (<ConfirmationDialog
                    TaskName={task.title}
                    onConfirm={HandleDeleteItem}
                />)}
        </TableRow>

    )
}

export default TaskItem;