import Task from "../../../types/Task";
import data from "../../../assets/mock.json";

export const getInitTasks = () => {
    const tasks = getTasksFromFile();
    let tasksObjects: Array<Task> = [];

    tasks.forEach(task => {
        if (task.status === "Close") {

            const newTask: Task = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
                review: task.review,
                timeSpent: task.timeSpent,
                endTime: task.endTime ? task.endTime : undefined,
            };

            tasksObjects.push(newTask);
        } else if (task.priority === "High") {
            const newTask: Task = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
                endTime: task.endTime ? task.endTime : undefined,
            };

            tasksObjects.push(newTask);
        } else {
            const newTask: Task = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
            };

            tasksObjects.push(newTask);
        }

    });

    return tasksObjects;
};

const getTasksFromFile = () => {
    return data.tasks;
};

export const filterTasks = (filterByOpenStatus: boolean, filterByHighPriority: boolean, query: string) => {

    let filteredTasks = getInitTasks();
    // Once i have the server will filter the tasks that are in the server side meaning will include the new ones, here we don't add to mock

    if (query != "") {
        filteredTasks = filteredTasks.filter((task: Task) => {
            return task.title.toString().toLowerCase().includes((query.toLowerCase()));
        });
    }


    if (filterByOpenStatus) {
        filteredTasks = filteredTasks.filter((task) => task.status === "Open");
    }


    if (filterByHighPriority) {
        filteredTasks = filteredTasks.filter((task) => task.priority === "High");
    }


    return filteredTasks;
};
