import {FormControl, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";
import {setSearchQuery} from "../../features/redux/filter/filterSlice";
import {useDispatch} from "react-redux";
import {toggleFilterAction} from "../../features/redux/actions";


const Search = () => {
    const [input, setInput] = useState<string>("");
    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };


    useEffect(() => {
        dispatch(setSearchQuery(input));
        dispatch(toggleFilterAction());
    }, [input]);


    return (
        <FormControl>
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
                    value={input}
                    onChange={handleInput}
                />
                <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
                    <SearchIcon style={{fill: "blue"}}/>
                </IconButton>
            </Paper>
        </FormControl>
    );

};

export default Search;