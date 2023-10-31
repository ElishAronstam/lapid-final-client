import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    styled,
    SxProps,
    TextField,
} from "@mui/material";

import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {openFormDialogBoxSelector, selectItemCount,} from '../../../features/redux/task/taskSelectors'
import {closeConfirmationDialogBox, closeFormDialogBox} from "../../../features/redux/task/taskSlice"
import {DesktopDateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from 'dayjs';
import utc from "dayjs/plugin/utc";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Task from "../../../types/Task";
import useActionHook from "../../../features/redux/taskHooks/useActionHook";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CREATE_TASK } from '../../../graphql/task';
import { useMutation } from '@apollo/client';

const StyledTextField = styled(TextField)(({theme}) => ({
    variant: "outlined",
    marginBottom: theme.spacing(2)
}));

export const DialogTitleStyle: SxProps = {
    margin: 2,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
}

export const DialogActionsStyle: SxProps = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 5
}

const OpenFormDialogBox = () => {
    const {addTaskToStore} = useActionHook();
    dayjs.extend(utc);

    const [endTime, setEndTime] = React.useState<Dayjs | null>(
        dayjs.utc(new Date())
    );
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("Open");
    const [isUrgent, setIsUrgent] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estTime, setEstTime] = useState("");
    const [review, setReview] = useState("");
    const [timeSpent, setTimeSpent] = useState("");


    const openDialog = useSelector(openFormDialogBoxSelector);

    const dispatch = useDispatch();


    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleEstTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstTime(e.target.value);
    };

    const handleReview = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReview(e.target.value);
    };

    const handleTimeSpent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeSpent(e.target.value);
    };


    const handlePriorityChange = (e: any) => {
        if (e.target.value == "High") {
            setIsUrgent(true);
        } else {
            setIsUrgent(false);
        }
        setPriority(e.target.value);
    };

    const handleStatusChange = (e: any) => {
        const status = e.target.value;
        if (status == "Close") {
            setIsClosed(true);
            setIsUrgent(false);
        }
        setStatus(status);
    };

    const handleCloseDialog = () => {
        dispatch(closeFormDialogBox());
    };

    const handleSubmit = async () => {
        try {
            const result = await createTaskMutation();
            addTaskToStore(result.data.createTask);
            toast.success('Task added successfully !', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(closeFormDialogBox());
        } catch (error) {
            console.error(error);
        }
    };

    const [createTaskMutation] = useMutation(CREATE_TASK, {
        variables: {
            title: title,
            description: description,
            estimatedTime: estTime,
            status: status,
            priority: priority,
            review: isClosed ? review : undefined,
            timeSpent: isClosed ? timeSpent : undefined,
            endTime: (isClosed || isUrgent) ? endTime?.toISOString() : undefined,
        },
    });

    return (
        <Container>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle
                    sx={{
                        ...DialogTitleStyle
                    }}>
                    New Task
                </DialogTitle>

                <DialogContent>
                    <FormGroup sx={{m: 2, minWidth: 400}}>

                        <StyledTextField
                            name="title"
                            label="Title"
                            onChange={handleTitle}/>

                        <StyledTextField
                            name="description"
                            label="Description"
                            onChange={handleDescription}/>

                        <FormControl fullWidth style={{marginTop: 5}}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={status}
                                label="Status"
                                onChange={handleStatusChange}
                                name="status"
                                variant="outlined"
                            >
                                <MenuItem value={"Open"}>Open</MenuItem>
                                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                                <MenuItem value={"Close"}>Close</MenuItem>
                            </Select>
                        </FormControl>


                        <FormControl fullWidth sx={{my: 2}}>
                            <InputLabel>Priority</InputLabel>
                            <Select
                                value={priority}
                                label="Priority"
                                onChange={handlePriorityChange}
                                name="priority"
                                variant="outlined"
                            >
                                <MenuItem value={"Low"}>Low</MenuItem>
                                <MenuItem value={"Medium"}>Medium</MenuItem>
                                <MenuItem value={"High"}>High</MenuItem>
                            </Select>
                        </FormControl>


                        <StyledTextField
                            name="estimatedTime"
                            label="Estimated Time"
                            onChange={handleEstTime}/>


                        {(isUrgent || isClosed) &&
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDateTimePicker
                                    label="Select End Time"
                                    value={dayjs.utc(endTime)}
                                    minDate={dayjs.utc(new Date())}
                                    onChange={(newDateTime) => setEndTime(newDateTime)}
                                    sx={{marginBottom: 2}}/>
                            </LocalizationProvider>}

                        {isClosed &&
                            <StyledTextField
                                name="review"
                                label="Review"
                                onChange={handleReview}/>}

                        {isClosed &&
                            <StyledTextField
                                name="timeSpent"
                                label="Time Spent"
                                onChange={handleTimeSpent}/>}
                    </FormGroup>
                </DialogContent>

                <DialogActions sx={{
                    ...DialogActionsStyle
                }}>
                    <Button onClick={handleSubmit}
                            sx={{background: "#228B22", color: "white"}}>Add
                    </Button>

                    <Button onClick={handleCloseDialog}
                            sx={{background: "#FF0000", color: "white",}}>Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer/>
        </Container>
    )
};

export default OpenFormDialogBox;
