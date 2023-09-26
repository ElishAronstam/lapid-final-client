import {Button, Fab} from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Add() {
    const nav = useNavigate();

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
                    width: "100px", // Set the width to make it square
                    height: "50px", // Set the height to make it square
                }}
                onClick={() => {
                    nav("/todoInput")
                }}
                aria-label="todoInput">
                Create
            </Button>
        </>
    )
}