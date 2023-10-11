import {Button, Fab} from '@mui/material'
import React, {useState} from 'react'
import OpenTaskDialog from "../dialogComps/OpenTaskDialog";

export default function AddButton() {

    const [openForm, setOpenForm]=useState(false);

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
                    setOpenForm(true);
                }}
                aria-label="todoInput">
                Create
            </Button>
            {openForm &&  <OpenTaskDialog openForm={openForm} setOpenForm={setOpenForm}/>}
        </>
    )
}