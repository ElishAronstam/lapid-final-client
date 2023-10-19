import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    openConfirmationDialogBoxSelector,
    openReadDialogBoxSelector,
    selectCurrentTask
} from "../../features/redux/task/taskSelectors";
import {closeConfirmationDialogBox, closeReadDialogBox, updateCurrentTaskId} from "../../features/redux/task/taskSlice";
import useActionHook from "../../features/redux/taskHooks/useActionHook";

// interface ConfirmationDialogProps {
//     TaskName: string,
//     onConfirm: (confirmation: boolean) => void;
// }

const ConfirmationDialog = () => {
const openDialog = useSelector(openConfirmationDialogBoxSelector);
const task = useSelector(selectCurrentTask);

const {deleteTaskFromStore} = useActionHook();

const dispatch = useDispatch();

const handleCloseDialog = () => {
    dispatch(closeConfirmationDialogBox);
    dispatch(updateCurrentTaskId(""));
};

    const handleConfirmed = () => {
        if(task) {
            deleteTaskFromStore(task.id);
            dispatch(closeConfirmationDialogBox);
        }
    };

    return (<Container>
        {task && <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
                <Typography variant="h4">Delete Item</Typography>
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