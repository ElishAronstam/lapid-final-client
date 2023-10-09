import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import {useForm} from 'react-hook-form';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Close} from '@mui/icons-material';
import {addTask, delSingleTask, selectItemCount, updateTask} from '../../features/task/taskSlice'
import {DesktopDateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from 'dayjs';
import utc from "dayjs/plugin/utc";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ITask from "../../types/ITask";
import useActionHook from "../../features/customHooks/useActionHook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoInput = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const nav = useNavigate();
    const {addTaskToStore}=useActionHook();
    dayjs.extend(utc);

    const [untilDate, setUntilDate] = React.useState<Dayjs | null>(
        dayjs.utc(new Date())
    );
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("Open");
    const [isUrgent, setIsUrgent] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const tasksCount=useSelector(selectItemCount);

    const handlePriorityChange = (e: any) => {
        if (e.target.value == "High") {
            setIsUrgent(true);
        } else {
            setIsUrgent(false);
        }
        setPriority(e.target.value);
    }

    const handleStatusChange = (e: any) => {
        const status = e.target.value;
        if (status == "Close") {
            setIsClosed(true);
            setIsUrgent(false);
        }
        setStatus(status);
    }

    const onSubForm = async (bodyFormData: any) => {
        const newTask: ITask = {
            id: (Number(tasksCount)+1).toString(),
            title: bodyFormData.title,
            description: bodyFormData.description,
            estimatedTime: bodyFormData.estimatedTime,
            status: bodyFormData.status,
            priority: bodyFormData.priority,
            review: isClosed ? bodyFormData.review : undefined,
            timeSpent: isClosed ? bodyFormData.timeSpent : undefined,
            endTime: (isClosed || isUrgent) ? untilDate?.toISOString() : undefined,
        };

        addTaskToStore(newTask);

        toast.success('Task added successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    return (
        <Container
            maxWidth="xl"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
            }}
        >
            <form onSubmit={handleSubmit(onSubForm)}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} sx={{textAlign: 'right'}}>
                        <IconButton onClick={() => nav("/")} aria-label="close" sx={{color: 'red'}}>
                            <Close/>
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography variant="h6">New Task</Typography>
                    </Grid>

                    <Grid item xs={12}>
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
                        />
                        {errors.title && (
                            <p style={{color: 'red'}}>{errors.title.message as string}</p>
                        )}
                    </Grid>

                    <Grid item xs={12}>
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
                        />
                        {errors.description && (
                            <p style={{color: 'red'}}>{errors.description.message as string}</p>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
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
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
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
                    </Grid>


                    <Grid item xs={12}>
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
                        />
                        {errors.estimatedTime && (
                            <p style={{color: 'red'}}>{errors.estimatedTime.message as string}</p>
                        )}
                    </Grid>

                    {(isUrgent || isClosed) && <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDateTimePicker
                                label="Select Until Date"
                                value={dayjs.utc(untilDate)}
                                minDate={dayjs.utc(new Date())}
                                onChange={(newDateTime) => setUntilDate(newDateTime)}
                            />
                        </LocalizationProvider>
                    </Grid>
                    }

                    {isClosed && <Grid item xs={12}>
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
                        />
                        {errors.review && (
                            <p style={{color: 'red'}}>{errors.review.message as string}</p>
                        )}
                    </Grid>}
                    {isClosed && <Grid item xs={12}>
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
                        />
                        {errors.timeSpent && (
                            <p style={{color: 'red'}}>{errors.timeSpent.message as string}</p>
                        )}
                    </Grid>}


                    <Grid item xs={12}>
                        <Button type='submit' style={{
                            background: "#228B22",
                            color: "white",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100px", // Set the width to make it square
                            height: "50px", // Set the height to make it square
                            marginTop: "5px",
                        }}>Add</Button>
                    </Grid>
                </Grid>
            </form>
            <ToastContainer />
        </Container>
    );
}

export default TodoInput;
