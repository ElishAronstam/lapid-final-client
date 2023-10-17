import {TableCell, TableHead, TableRow} from "@mui/material";

interface IHeadProps {
    titles: string[];
}

const TasksTableHead = (props: IHeadProps) => {
    return (<TableHead>
        <TableRow>
            {props.titles.map((category: string) => {
                return <TableCell
                    key={category} align="center"> {category}
                </TableCell>
            })}
        </TableRow>
    </TableHead>)

}

export default TasksTableHead;