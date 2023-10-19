import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case 'High':
            return <KeyboardDoubleArrowUpIcon style={{color: 'red', fontSize: '2rem'}}/>;
        case 'Medium':
            return <KeyboardDoubleArrowDownIcon style={{color: 'green', fontSize: '2rem'}}/>;
        case 'Low':
          return <ArrowDownwardIcon/>;
        default:
          return null;
   }
};

export const getTypeIcon = (status: string) => {
    switch (status) {
        case 'Open':
            return <EditCalendarIcon style={{color: 'black'}}/>;
case 'In progress':
    return <EditCalendarIcon style={{color: 'red'}}/>;
case 'Close':
    return <ArrowDownwardIcon style={{color: 'green'}}/>;
default:
    return null;
}
};