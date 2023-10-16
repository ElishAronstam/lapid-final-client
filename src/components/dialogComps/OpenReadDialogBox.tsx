import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeReadDialogBox, updateCurrentTaskId} from "../../features/task/taskSlice";
import {openReadDialogBoxSelector, selectCurrentTask} from "../../features/task/taskSelectors";
import React from "react";

const OpenReadDialogBox = () => {
    const openDialog = useSelector(openReadDialogBoxSelector);
    const task = useSelector(selectCurrentTask);

    const StyledDialogContentText = styled(DialogContentText)(({theme}) => ({
        marginBottom: theme.spacing(1),
    }));


    const dispatch = useDispatch();

    const handleCloseDialog = () => {
        dispatch(closeReadDialogBox());
        dispatch(updateCurrentTaskId(""));
    }

    return (<div>
            {task && <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle sx={{
                    margin: 2, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'
                }}>
                    {task.title}
                </DialogTitle>

                <DialogContent>
                    <StyledDialogContentText>
                        <strong>Description:</strong> {task.description}
                    </StyledDialogContentText>

                    <StyledDialogContentText>
                        <strong>Priority:</strong> {task.priority}
                    </StyledDialogContentText>

                    <StyledDialogContentText>
                        <strong>Estimated Time:</strong> {task.estimatedTime}
                    </StyledDialogContentText>

                    {task.endTime && <StyledDialogContentText>
                        <strong>End Time: </strong>{task.endTime}
                    </StyledDialogContentText>}

                    {task.review && <StyledDialogContentText>
                        <strong>Review:</strong> {task.review}
                    </StyledDialogContentText>}

                    {task.timeSpent && <StyledDialogContentText>
                        <strong>Time Spent:</strong> {task.timeSpent}
                    </StyledDialogContentText>}


                </DialogContent>

                <DialogActions sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginBottom: '5px'
                }}>
                    <Button onClick={handleCloseDialog}
                            style={{
                                background: "#FF0000", color: "white", width: "100px", height: "50px"
                            }}>Close</Button>
                </DialogActions>
            </Dialog>}
        </div>)

}


export default OpenReadDialogBox;