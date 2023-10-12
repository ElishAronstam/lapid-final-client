import {IconButton, InputBase, Paper, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";

interface ISearchProps{
    query:string;
    setQuery:(q:string) => void;
}
const Search=(props:ISearchProps)=>{

    const HandleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
        props.setQuery(e.target.value);
    }

    // const filteredTasks=()=>{
    //     if(query === "") {
    //         return tasks;
    //     } else {
    //         return tasks.filter((task:ITask) => task.title.toLowerCase().includes(query));
    //     }
    // }


    return(
        <form>
            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #DCDCDC",
                    "&:hover": { border: "1px solid gray" },
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 100,
                }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search For A Task By Title.."
                inputProps={{ "aria-label": "search for a task by title" }}
                value={props.query}
                onChange={HandleInput}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
            </Paper>
        </form>
    );

}

export default Search;