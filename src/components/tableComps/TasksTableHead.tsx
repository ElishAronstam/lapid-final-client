import {TableCell, TableHead, TableRow} from "@mui/material";

interface IHeadProps {
    titles: string[];
};

const TasksTableHead = ({titles}: IHeadProps) => {
    return (<TableHead>
        <TableRow>
            {titles.map((category: string) => {
                return <TableCell
                    key={category} align="center"> {category}
                </TableCell>
            })}
        </TableRow>
    </TableHead>);
};

export default TasksTableHead;