import axios from 'axios';
import Task from "../types/Task";
import { useQuery } from '@apollo/client';
import { ALL_TASKS } from '../graphql/task';

// export const fetchData = async () => {
//     try {
//         const response = await axios.get('http://localhost:8000/tasks');
//         return response.data;
//     } catch (error) {
//         return [];
//     }
//
// }


export const postNewTask = async (taskData: Task) => {
    try {
        const response = await axios.post('http://localhost:8000/create', taskData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error for handling in the component, if needed
    }
};


export const deleteTask = async (idToDelete: string) => {
    try {
        const response = await axios.delete(`http://localhost:8000/delete/${idToDelete}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const filterTasks = async (filterByOpenStatus: boolean, filterByHighPriority: boolean, keyword: string) => {
    try {
        const response = await axios.get(`http://localhost:8000/filter?param1=${filterByOpenStatus}&param2=${filterByHighPriority}&param3=${keyword}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};