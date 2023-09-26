import {Button, FormLabel, Grid, TextField, Typography,} from "@mui/material";
import {useForm} from 'react-hook-form';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Close} from '@mui/icons-material';
import {addTask, delSingleTask, updateTask} from '../../features/task/taskSlice'
import {DateTimePicker, DesktopDateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";


export default function TodoInput() {
    const {register, getValues, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const onSubForm = async (bodyFormData: any) => {
        console.log(bodyFormData);
        // TODO: use dispatch to add to store
    }

    return (
        <div className='container mt-3 mb-4 mx-auto'>
            <form onSubmit={handleSubmit(onSubForm)}>
                <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h6">New Task</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => nav("/")} aria-label="close" sx={{color: 'red'}}>
                            <Close/>
                        </IconButton>
                    </Grid>
                </Grid>

                <TextField
                    {...register('title', {
                        required: {value: true, message: 'Title is required'},
                        minLength: {value: 3, message: 'Task must be at least 3 characters'},
                        maxLength: 99,
                    })}
                    name="title"
                    label="title"
                    variant="outlined"
                    fullWidth
                />
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
                    label="description"
                    variant="outlined"
                    fullWidth
                />
                {errors.description && (
                    <p style={{color: 'red'}}>{errors.description.message as string}</p>
                )}

                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDateTimePicker
                            {...register('estimatedTime', {
                                required: {value: true, message: 'Estimated Time is required'},
                            })}
                            label="Select Date and Time"
                            value={selectedDateTime}
                            onChange={(newDateTime) => setSelectedDateTime(newDateTime)}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit'>Add</Button>
                </Grid>
            </form>
        </div>
    );
}
