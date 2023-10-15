import {AppBar, Button, DialogContentText, styled, Toolbar, Typography, withStyles} from "@mui/material";
import {deepPurple} from "@mui/material/colors"
import useGetDataHook from "../../features/customHooks/useGetDataHook";
import {useDispatch} from "react-redux";
import {toggleHighPriorityFilter} from "../../features/redux/actions";
import {toggleOpenStatusFilter} from "../../features/redux/actions";

const QuickFilters = () => {

    const tasks=useGetDataHook();

    const dispatch=useDispatch();

    const StyledButton = styled(Button)(({theme}) => ({
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(1),
        backgroundColor:deepPurple[300],
        color:deepPurple[50]
    }));

    const StyledTopography=styled(Typography)(({theme})=>({
        display: "inline-block", // Make the Typography element inline
        verticalAlign: "middle", // Align it vertically with the buttons
        marginRight: theme.spacing(1), // Add some spacing between the elements
        marginTop: theme.spacing(3),
    }));

    const HandleFilterByOpen=()=>
    {
        dispatch(toggleOpenStatusFilter());
    };

    const HandleFilterByPriority=()=>{
        dispatch(toggleHighPriorityFilter());
    };

    return(
        <div>
            <StyledTopography>
                QUICK FILTERS:
            </StyledTopography>
            <StyledButton onClick={HandleFilterByOpen} > Open Tasks</StyledButton>
            <StyledButton onClick={HandleFilterByPriority}>High Priority Tasks</StyledButton>
        </div>
    )
}
export default QuickFilters;