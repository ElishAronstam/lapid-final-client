import {Button, styled, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors"
import {useDispatch} from "react-redux";
import {toggleFilterByPriority, toggleFilterByStatus} from "../../features/redux/task/taskSlice";
import {toggleFilterAction} from "../../features/redux/actions";

const QuickFilters = () => {

    const dispatch = useDispatch();

    const StyledButton = styled(Button)(({theme}) => ({
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(1),
        backgroundColor: deepPurple[300],
        color: deepPurple[50],
        '&:hover': {
            backgroundColor: deepPurple[50], color: deepPurple[400], border: `2px solid ${deepPurple[400]}`
        },
    }));

    const StyledTopography = styled(Typography)(({theme}) => ({
        display: "inline-block", // Make the Typography element inline
        verticalAlign: "middle", // Align it vertically with the buttons
        marginRight: theme.spacing(1), // Add some spacing between the elements
        marginTop: theme.spacing(3),
    }));

    const handleFilterByOpen = () => {
        dispatch(toggleFilterByStatus()); // Goes to task slice
        dispatch(toggleFilterAction())
    };

    const handleFilterByPriority = () => {
        dispatch(toggleFilterByPriority()); // Goes to task slice
        dispatch(toggleFilterAction())
    };

    return (<div>
            <StyledTopography>
                QUICK FILTERS:
            </StyledTopography>
            <StyledButton onClick={handleFilterByOpen}> Open Tasks </StyledButton>
            <StyledButton onClick={handleFilterByPriority}> High Priority Tasks </StyledButton>
        </div>)
}
export default QuickFilters;