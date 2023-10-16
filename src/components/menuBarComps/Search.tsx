import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";
import useGetDataHook from "../../features/customHooks/useGetDataHook";
import {setTasks} from "../../features/task/taskSlice";
import ITask from "../../types/ITask";
import {useDispatch} from "react-redux";
import {getInitTasks} from "../../features/task/helper";


const Search = () => {
    const [query, setQuery] = useState("");
    const tasks = useGetDataHook();
    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
    }


    useEffect(() => {
        if (query === "") {
            const filtered=getInitTasks();
            dispatch(setTasks(filtered));
        } else {
            const filtered=tasks.filter((task: ITask) => {
              return task.title.toString().toLowerCase().includes((query.toLowerCase()));
            } );
            dispatch(setTasks(filtered));
        }
    }, [query]);


    return (
        <form>
            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #DCDCDC",
                    "&:hover": {border: "1px solid gray"},
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 100,
                }}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search For A Task By Title.."
                    inputProps={{"aria-label": "search for a task by title"}}
                    value={query}
                    onChange={handleInput}
                />
                <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
                    <SearchIcon style={{fill: "blue"}}/>
                </IconButton>
            </Paper>
        </form>
    );

}

export default Search;