import {TableCell, TableHead, TableRow} from "@mui/material";

interface HeadProps {
    titles: Array<string>;
};


const TasksTableHead = ({titles}: HeadProps) => {
    return (<TableHead>
        <TableRow>
            {titles.map((category: string) =>
                <TableCell
                    key={category} align="center"> {category}
                </TableCell>
            )}
        </TableRow>
    </TableHead>);
};

export default TasksTableHead;