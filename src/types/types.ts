export enum Status {
    Pending,
    Done,
};

export type Task = {
    id: string
    info: string
    completed: Status
    createdAt: Date
    completedAt: Date
}