import {Button} from '@mui/material'
import React from 'react'
import {useDispatch} from "react-redux";
import {openFormDialogBox} from "../../features/task/taskSlice";

export default function AddButton() {

    const dispatch=useDispatch();

    return (
        <>
            <Button
                style={{
                    background: "#228B22",
                    color: "white",
                    position: 'sticky',
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "50px",
                    marginBottom: '10px', // Equal margin at the top and bottom
                }}
                onClick={() => {
                    dispatch(openFormDialogBox());
                }}
                aria-label="todoInput">
                Create
            </Button>

        </>
    )
}