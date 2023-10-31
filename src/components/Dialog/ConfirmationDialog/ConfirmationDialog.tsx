import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {openConfirmationDialogBoxSelector, selectTaskToDelete} from "../../../features/redux/task/taskSelectors";
import {closeConfirmationDialogBox, updateTaskIdToDelete} from "../../../features/redux/task/taskSlice";
import useActionHook from "../../../features/redux/taskHooks/useActionHook";
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../../graphql/task';

const ConfirmationDialog = () => {
    const openDialog = useSelector(openConfirmationDialogBoxSelector);

    const task = useSelector(selectTaskToDelete);

    const {deleteTaskFromStore} = useActionHook();

    const dispatch = useDispatch();

    const handleCloseDialog = () => {
        dispatch(closeConfirmationDialogBox);
        dispatch(updateTaskIdToDelete(""));
    };

    const handleConfirmed = async() => {
        if (task) {
            try {
                const response=await deleteTaskMutation();
                deleteTaskFromStore(task.id);
                dispatch(closeConfirmationDialogBox);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const [deleteTaskMutation] = useMutation(DELETE_TASK,{
        variables: {
            taskId: task?task.id:undefined,
          }
    });


    return (<Container>
        {task && <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
                <Typography variant="h6">Delete Item</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    Are you sure you want to delete: "{task.title}"?
                </Typography>
                <Typography variant="subtitle2">
                    You can't undo this operation
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleCloseDialog}>Cancel</Button>
                <Button variant="contained" color="error" onClick={handleConfirmed}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
        }
    </Container>);
}

export default ConfirmationDialog;