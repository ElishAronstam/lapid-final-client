import {IconButton, InputBase, Paper, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";
import useGetDataHook from "../../features/customHooks/useGetDataHook";
import {setTasks} from "../../features/task/taskSlice";
import ITask from "../../types/ITask";
import {useDispatch} from "react-redux";
import {getInitTasks} from "../../features/task/helper";



const Search=()=>{
    const [query, setQuery] = useState('');
    const tasks=useGetDataHook();
    const [filteredTasks, setFilteredTasks]= useState(tasks);
    const dispatch = useDispatch();

    const HandleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setQuery(e.target.value);
    }


  useEffect(()=>{
      if(query === "") {
          setFilteredTasks(getInitTasks());
          console.log(query);
          dispatch(setTasks(filteredTasks));
      } else {
          setFilteredTasks(tasks.filter((task:ITask) => task.title.toLowerCase().indexOf((query.toLowerCase()))>-1));
          console.log(query);
          dispatch(setTasks(filteredTasks));
      }
    },[query]);


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
                value={query}
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