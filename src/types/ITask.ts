export default interface ITask {
    id: string;
    title: string;
    description: string;
    estimatedTime: string;
    status: string;
    priority: string;
    review?: string;
    timeSpent?: string;
    endTime?: string;
};
