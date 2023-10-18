import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import {useForm} from 'react-hook-form';
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {openFormDialogBoxSelector, selectItemCount,} from '../../features/redux/task/taskSelectors'
import {closeFormDialogBox} from "../../features/redux/task/taskSlice"
import {DesktopDateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from 'dayjs';
import utc from "dayjs/plugin/utc";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ITask from "../../types/ITask";
import useActionHook from "../../features/redux/customHooks/useActionHook";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OpenFormDialogBox = () => {
    const {register, formState: {errors}} = useForm();
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

    const tasksCount = useSelector(selectItemCount);
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

    const handleSubmit = () => {
        const newTask: ITask = {
            id: (Number(tasksCount) + 1).toString(),
            title: title,
            description: description,
            estimatedTime: estTime,
            status: status,
            priority: priority,
            review: isClosed ? review : undefined,
            timeSpent: isClosed ? timeSpent : undefined,
            endTime: (isClosed || isUrgent) ? endTime?.toISOString() : undefined,
        };

        addTaskToStore(newTask);

        toast.success('Task added successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });

    };


    return (
        <div>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle sx={{
                    margin: 2,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>
                    New Task
                </DialogTitle>

                <DialogContent>
                    <FormGroup sx={{m: 2, minWidth: 400}}>

                        <TextField
                            {...register('title', {
                                required: {value: true, message: 'Title is required'},
                                minLength: {value: 3, message: 'Task must be at least 3 characters'},
                                maxLength: 99,
                            })}
                            name="title"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            style={{marginTop: '5px'}}
                            onChange={handleTitle}/>
                        {errors.title && (
                            <p style={{color: 'red'}}>{errors.title.message as string}</p>
                        )}

                        <TextField
                            {...register('description', {
                                required: {value: true, message: 'Description is required'},
                                minLength: {value: 5, message: 'Description must be at least 5 characters'},
                                maxLength: 99,
                            })}
                            name="description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            style={{marginTop: '5px'}}
                            onChange={handleDescription}/>
                        {errors.description && (
                            <p style={{color: 'red'}}>{errors.description.message as string}</p>
                        )}


                        <FormControl fullWidth style={{marginTop: '5px'}}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                {...register('status', {required: true})}
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
                            {errors.status && <div style={{color: 'red'}}>Status is required</div>}
                        </FormControl>


                        <FormControl fullWidth style={{marginTop: '5px'}}>
                            <InputLabel>Priority</InputLabel>
                            <Select
                                {...register('priority', {required: true})}
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
                            {errors.priority && <div style={{color: 'red'}}>Priority is required</div>}
                        </FormControl>


                        <TextField
                            {...register('estimatedTime', {
                                required: {value: true, message: 'Estimated Time is required'},
                                minLength: {value: 3, message: "Estimated Time must be at least 3 characters"},
                                maxLength: 99,
                            })}
                            name="estimatedTime"
                            label="Estimated Time"
                            variant="outlined"
                            fullWidth
                            style={{marginTop: '5px', marginBottom: '7px'}}
                            onChange={handleEstTime}/>
                        {errors.estimatedTime && (
                            <p style={{color: 'red'}}>{errors.estimatedTime.message as string}</p>
                        )}


                        {(isUrgent || isClosed) &&
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDateTimePicker
                                    label="Select End Time"
                                    value={dayjs.utc(endTime)}
                                    minDate={dayjs.utc(new Date())}
                                    onChange={(newDateTime) => setEndTime(newDateTime)}/>
                            </LocalizationProvider>}

                        {isClosed &&
                            <TextField
                                {...register('review', {
                                    required: {value: true, message: 'Review is required'},
                                    minLength: {value: 3, message: "Review must be at least 5 characters"},
                                    maxLength: 99,
                                })}
                                name="review"
                                label="Review"
                                variant="outlined"
                                fullWidth
                                style={{marginTop: '5px'}}
                                onChange={handleReview}/>}
                        {errors.review && (
                            <p style={{color: 'red'}}>{errors.review.message as string}</p>
                        )}

                        {isClosed &&
                            <TextField
                                {...register('timeSpent', {
                                    required: {value: true, message: 'Time spent is required'},
                                    minLength: {value: 3, message: "Time spent must be at least 5 characters"},
                                    maxLength: 99,
                                })}
                                name="timeSpent"
                                label="Time Spent"
                                variant="outlined"
                                fullWidth
                                style={{marginTop: '5px'}}
                                onChange={handleTimeSpent}/>}
                        {errors.timeSpent && (
                            <p style={{color: 'red'}}>{errors.timeSpent.message as string}</p>
                        )}
                    </FormGroup>
                </DialogContent>

                <DialogActions sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginBottom: '5px'
                }}>
                    <Button onClick={handleSubmit} style={{
                        background: "#228B22",
                        color: "white",
                        width: "100px",
                        height: "50px"
                    }}>Add</Button>

                    <Button onClick={handleCloseDialog}
                            style={{
                                background: "#FF0000",
                                color: "white",
                                width: "100px",
                                height: "50px"
                            }}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <ToastContainer/>
        </div>
    )
};

export default OpenFormDialogBox;
