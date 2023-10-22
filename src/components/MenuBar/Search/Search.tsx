import {FormControl, IconButton, InputBase, Paper, SxProps} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";
import {setSearchQuery, toggleFilter} from "../../../features/redux/filter/filterSlice";
import {useDispatch} from "react-redux";
import {toggleFilterAction} from "../../../features/redux/actions";
import {deepPurple, grey} from "@mui/material/colors";

const PaperStyle:SxProps={
    border: 1,
    borderColor:deepPurple[300],
    "&:hover": {borderColor:grey[500]},
    paddingX:4,
    paddingY:1,
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
}

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
        dispatch(toggleFilter({type:'toggleFilter',payload:input})); // Goes to task slice
    }, [input]);


    return (
        <FormControl>
            <Paper
                elevation={0}
                sx={{
                   ...PaperStyle
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