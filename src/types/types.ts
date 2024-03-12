export enum Filters {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED',

}

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export type TodosState = {
    list: Todo[];
    filter: Filters;
}