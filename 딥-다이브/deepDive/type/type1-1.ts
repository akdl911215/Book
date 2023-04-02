interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type CustomPick<T extends Object, K extends keyof T> = {
    K: T[keyof T];
}

// type CustomPick<T extends typeof [P extends keyof T as blabka]: T[P], K extends keyof T> = {
//     K: T[keys]
// };

// type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview = CustomPick<Todo, "title" | "completed">;

const todo: TodoPreview = {

};

const todo2: TodoPreview = {
    title: "haha",
    completed: true,
}
