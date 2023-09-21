import { Button, FormLabel, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import {addTask, delSingleTask, updateTask} from '../features/task/taskSlice'

export default function Todoinput() {
    const {register, getValues, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const onSubForm = async (bodyFormData: any) => {
        console.log(bodyFormData);
        // TODO: use dispatch to add to store
    }

    return (
        <div className='container mt-3 mb-4'>
            <form onSubmit={handleSubmit(onSubForm)}>
                <div>
                    <TextField
                        {...register('title', {
                            required: {value: true, message: 'Title is requried'},
                            minLength: {value: 3, message: "Task must be at least 3 characters"},
                            maxLength: 99
                        })}
                        name="title"
                        label="title"
                        variant="outlined"
                        fullWidth
                    />
                    {errors.title  && (
                        <p style={{ color: 'red' }}>{errors.title.message as string}</p>
                    )}

                    <Button type='submit'>
                        Add
                    </Button>

                </div>
            </form>
        </div>
    )
}
