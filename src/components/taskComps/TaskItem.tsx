import ITask from "../../types/ITask";
import {IconButton, TableCell, TableRow, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import NoteIcon from '@mui/icons-material/Note';
import useActionHook from "../../features/redux/customHooks/useActionHook";
import ConfirmationDialog from "../dialogComps/ConfirmationDialog";
import {useState} from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

interface ITaskProps {
    task: ITask;
}

const TaskItem = (props: ITaskProps) => {
    const task = props.task;
    const {deleteTaskFromStore, viewTaskDetails} = useActionHook();

    const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);

    const handleDeleteItem = (confirmation: boolean) => {
        if (confirmation) {
            deleteTaskFromStore(task.id);
        }
        setIsConfirmationOpen(false);
    };

    const getPriorityIcon = (priority: string) => {
        switch (priority) {
            case 'High':
                return <KeyboardDoubleArrowUpIcon style={{color: 'red', fontSize: '2rem'}}/>;
            case 'Medium':
                return <KeyboardDoubleArrowDownIcon style={{color: 'green', fontSize: '2rem'}}/>;
            case 'Low':
                return <ArrowDownwardIcon/>;
            default:
                return null;
        }

    };

    const getTypeIcon = (status: string) => {
        switch (status) {
            case 'Open':
                return <EditCalendarIcon style={{color: 'black'}}/>;
            case 'In progress':
                return <EditCalendarIcon style={{color: 'red'}}/>;
            case 'Close':
                return <ArrowDownwardIcon style={{color: 'green'}}/>;
            default:
                return null;
        }
    }; // TODO: move to util

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
                onConfirm={handleDeleteItem}
            />)}
        </TableRow>
    );
};

export default TaskItem;