import ITask from "../../../types/ITask";
import data from "../../../assets/mock.json";

export const getInitTasks = () => {
    const tasks = tasksFromFile();
    let tasks_objects: ITask[] = [];

    tasks.forEach(task => {
        if (task.status === "Close") {

            const newTask: ITask = {
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

            tasks_objects.push(newTask);
        } else if (task.priority === "High") {
            const newTask: ITask = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
                endTime: task.endTime ? task.endTime : undefined,
            };

            tasks_objects.push(newTask);
        } else {
            const newTask: ITask = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
            };

            tasks_objects.push(newTask);
        }
    })
    console.log("tasks objects", tasks_objects);
    return tasks_objects;
}

const tasksFromFile = () => {
    return data.tasks;
}

export const filterTasks = (filterByOpenStatus: boolean, filterByHighPriority: boolean, query: string) => {

    let filteredTasks = getInitTasks();

    if (query != "") {
        filteredTasks = filteredTasks.filter((task: ITask) => {
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

}
