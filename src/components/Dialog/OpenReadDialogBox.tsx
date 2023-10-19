import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, makeStyles,
    styled, Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeReadDialogBox, updateCurrentTaskId} from "../../features/redux/task/taskSlice";
import {openReadDialogBoxSelector, selectCurrentTask} from "../../features/redux/task/taskSelectors";

const StyledDialogContentText = styled(DialogContentText)(({theme}) => ({
    marginBottom: theme.spacing(1),
}));

const OpenReadDialogBox = () => {
    const openDialog = useSelector(openReadDialogBoxSelector);
    const task = useSelector(selectCurrentTask);

    const dispatch = useDispatch();

    const handleCloseDialog = () => {
        dispatch(closeReadDialogBox);
        dispatch(updateCurrentTaskId(""));
    };

    const StyledTypography = styled(Typography)(({theme}) => ({
        display: "inline-block", // Make the Typography element inline
        variant:'body1',
        fontWeight: "bold"
    }));


    return (
        <Container>
        {task && <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle sx={{
                margin: 2, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'
            }}>
                {task.title}
            </DialogTitle>

            <DialogContent>
                <StyledDialogContentText>
                    <StyledTypography>Description:</StyledTypography> {task.description}
                </StyledDialogContentText>

                <StyledDialogContentText>
                    <StyledTypography>Priority:</StyledTypography> {task.priority}
                </StyledDialogContentText>

                <StyledDialogContentText>
                    <StyledTypography>Estimated Time:</StyledTypography> {task.estimatedTime}
                </StyledDialogContentText>

                {task.endTime && <StyledDialogContentText>
                    <StyledTypography>End Time: </StyledTypography>
                    {new Date(task.endTime).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        }
                    )}
                </StyledDialogContentText>}

                {task.review && <StyledDialogContentText>
                    <StyledTypography>Review:</StyledTypography> {task.review}
                </StyledDialogContentText>}

                {task.timeSpent && <StyledDialogContentText>
                    <StyledTypography>Time Spent:</StyledTypography> {task.timeSpent}
                </StyledDialogContentText>
                }


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
    </Container>)

};


export default OpenReadDialogBox;