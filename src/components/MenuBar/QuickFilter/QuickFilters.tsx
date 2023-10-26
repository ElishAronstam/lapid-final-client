import {Container, styled, ToggleButton, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors"
import {useDispatch} from "react-redux";
import {toggleFilter} from "../../../features/redux/filter/filterSlice";
import {toggleFilterAction} from "../../../features/redux/actions";
import {useState} from "react";


const StyledToggleButton = styled(ToggleButton)(({theme}) => ({
    marginTop: theme.spacing(2),
    marginLeft:theme.spacing(2),
    backgroundColor: deepPurple[300],
    color: deepPurple[50],
    "&.Mui-selected, &:hover": {
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

const StyledContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5)
}))

const QuickFilters = () => {

    const dispatch = useDispatch();


    const handleFilters = (param: string) => {
        dispatch(toggleFilter(toggleFilterAction(param)));
    }

    const [statusSelected, setStatusSelected] = useState(false);
    const [prioritySelected, setPrioritySelected] = useState(false);

    return (
        <StyledContainer>
            <StyledTypography>
                QUICK FILTERS:
            </StyledTypography>

            <StyledToggleButton onClick={() => handleFilters('open')}
                                selected={statusSelected}
                                value="open"
                                onChange={() => {
                                    setStatusSelected(!statusSelected);
                                }}>
                Open Tasks </StyledToggleButton>
            <StyledToggleButton onClick={() => handleFilters('high')}
                                selected={prioritySelected}
                                value="high"
                                onChange={() => {
                                    setPrioritySelected(!prioritySelected);
                                }}>
                High Priority Tasks </StyledToggleButton>
        </StyledContainer>
    )
};

export default QuickFilters;