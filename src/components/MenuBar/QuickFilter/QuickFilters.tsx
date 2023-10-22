import {Button, Container, styled, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors"
import {useDispatch, useSelector} from "react-redux";
import {toggleFilter} from "../../../features/redux/filter/filterSlice";
import {toggleFilterAction} from "../../../features/redux/actions";
import {
    toggleFilterByPrioritySelector,
    toggleFilterByStatusSelector
} from "../../../features/redux/filter/filterSelectors";


const StyledButton = styled(Button)<{ isFilter: boolean }>(({ theme, isFilter }) => ({
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
    backgroundColor: isFilter ? deepPurple[50] : deepPurple[300],
    color: isFilter ? deepPurple[400] : deepPurple[50],
    border: isFilter ? `${theme.spacing(0.25)} solid ${deepPurple[400]}` : 'none', // Use theme.spacing to set border width
    "&:hover": {
        backgroundColor: deepPurple[50],
        color: deepPurple[400],
        border: `${theme.spacing(0.25)} solid ${deepPurple[400]}`,
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    display: "inline-block", // Make the Typography element inline
    verticalAlign: "middle", // Align it vertically with the buttons
    marginRight: theme.spacing(1), // Add some spacing between the elements
    marginTop: theme.spacing(3),
}));

const StyledContainer=styled(Container)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5)
}))

const QuickFilters = () => {

    const isFilterByPriority = useSelector(toggleFilterByPrioritySelector);
    const isFilterByState = useSelector(toggleFilterByStatusSelector);

    const dispatch = useDispatch();


    const handleFilters = (param: string) => {
        dispatch(toggleFilter(toggleFilterAction(param))); // Goes to task slice
    }

    return (
        <StyledContainer>
            <StyledTypography>
                QUICK FILTERS:
            </StyledTypography>
            <StyledButton onClick={() => handleFilters('open')} isFilter={isFilterByState}> Open Tasks </StyledButton>
            <StyledButton onClick={() => handleFilters('high')} isFilter={isFilterByPriority}> High Priority
                Tasks </StyledButton>
        </StyledContainer>
    )
};

export default QuickFilters;