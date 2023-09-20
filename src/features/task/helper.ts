import { ITask, IUrgentTask, ICompletedTask } from "../../types/taskTypes";
import data from "../../assets/mock.json";

export const getInitTasks=() =>{
    const tasks=tasksFromFile();
    console.log(tasksFromFile());
    let tasks_objects: ITask[] = [];
    tasks.forEach(task => {
        if(task.status === "Close") {
            const newTask:ICompletedTask= {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
                review: task.review,
                timeSpent: task.timeSpent,
                endTime: task.endTime,
            };

            tasks_objects.push(newTask);
        } else if(task.priority === "High") {
            const newTask:IUrgentTask = {
                id: task.id,
                title: task.title,
                description: task.description,
                estimatedTime: task.estimatedTime,
                status: task.status,
                priority: task.priority,
                endTime: task.endTime,
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

    return tasks_objects;
}
const tasksFromFile=()=>{
    return data.tasks;
}

