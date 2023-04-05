interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type CustomPick<T, K extends keyof T> = {
    [E in K]: T[E]
}

type TodoPreview = CustomPick<Todo, 'title'>;
const todo: TodoPreview = {
    title: '1'
}