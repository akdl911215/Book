interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Todos {
    tata: string;
}

type CustomPick<T extends {}, K extends keyof T> = {
    [E in K]: T[E]
}
// type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview = CustomPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

const todo2: TodoPreview = {
    title: "haha",
    completed: true,
}
