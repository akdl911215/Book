interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type CustomPick<T, K extends keyof T> = {
    K: T[K]
}

// type CustomPick<T extends typeof [P extends keyof T as blabka]: T[P], K extends keyof T> = {
//     K: T[keys]
// };

type TodoPreview = Pick<Todo, "title" | "completed">;
// type TodoPreview

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

const todo2: TodoPreview = {
    title: "haha",
    completed: true,
}
