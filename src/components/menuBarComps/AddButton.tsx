import {Button, styled} from '@mui/material'
import React from 'react'
import {useDispatch} from "react-redux";
import {openFormDialogBox} from "../../features/task/taskSlice";
import {purple} from "@mui/material/colors";

export default function AddButton() {

    const dispatch=useDispatch();

    const StyledButton = styled(Button)(({theme}) => ({
        margin: theme.spacing(3),
        height:"50px",
        width: "100px",
        position:'sticky',
        bottom: 10,
        backgroundColor:purple[500],
        color:purple[50]
    }));

    return (
        <>
            <StyledButton
                onClick={() => {
                    dispatch(openFormDialogBox());
                }}
                aria-label="todoInput">
                Create
            </StyledButton>
        </>
    )
}