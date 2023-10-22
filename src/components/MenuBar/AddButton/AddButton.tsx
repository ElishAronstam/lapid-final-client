import {Button, styled} from '@mui/material'
import React from 'react'
import {useDispatch} from "react-redux";
import {openFormDialogBox} from "../../../features/redux/task/taskSlice";
import {deepPurple, purple} from "@mui/material/colors";

const StyledButton = styled(Button)(({theme}) => ({
    margin: theme.spacing(3),
    width: "8%",
    height: "100%",
    paddingX: 2,
    paddingY: 1,
    position: 'sticky',
    bottom: 10,
    backgroundColor: purple[500],
    color: purple[50],
    '&:hover': {
        backgroundColor: deepPurple[50],
        color: deepPurple[400],
        border: `${theme.spacing(0.25)} solid ${deepPurple[400]}`,
    },
}));

export default function AddButton() {

    const dispatch = useDispatch();

    return (<>
        <StyledButton
            onClick={() =>
                dispatch(openFormDialogBox())
            }
            aria-label="todoInput">
            Create
        </StyledButton>
    </>)
};