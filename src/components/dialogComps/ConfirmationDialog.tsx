import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useState} from "react";

interface IConfirmationDialogProps {
    TaskName: string,
    onConfirm: (confirmation: boolean) => void;
}

const ConfirmationDialog = (props: IConfirmationDialogProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleConfirm = (confirmation: boolean) => {
        setIsOpen(false);
        props.onConfirm(confirmation);
    };

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle>
                <Typography variant="h4">Delete Item</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    Are you sure you want to delete: "{props.TaskName}"?
                </Typography>
                <Typography variant="subtitle2">
                    You can't undo this operation
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => handleConfirm(false)}>Cancel</Button>
                <Button variant="contained" color="error" onClick={() => handleConfirm(true)}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>);
}

export default ConfirmationDialog;