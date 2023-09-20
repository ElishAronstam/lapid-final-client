export interface ITask {
    id: string;
    title: string;
    description: string;
    estimatedTime: string;
    status: string;
    priority: string;
}

export interface IUrgentTask extends ITask {
    endTime?: string;
}

export interface ICompletedTask extends ITask  {
    review?: string;
    timeSpent?: string;
    endTime?: string;
}