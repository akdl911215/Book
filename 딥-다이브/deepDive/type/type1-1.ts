interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// type CustomPick<T extends typeof [P extends keyof T as blabka]: T[P], K extends keyof T> = {
//     K: T[keys]
// };

type CustomPick<T, K extends keyof T> = {
    [P in K]: T[P];
}
type CustomPick2<T, K extends keyof T> = {
    [P in keyof T]: T[P];
}

// type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview = CustomPick<Todo, "title" | "completed">;
const todo: TodoPreview = {
    title: '11',
    completed: true,
};


type TodoPreview2 = CustomPick2<Todo, "title" | "completed">;
const todo2: TodoPreview2 = {
    title: '1',
    completed: true,
    description: 's'
};