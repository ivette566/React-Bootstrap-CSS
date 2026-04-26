import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type task = {
    id: number;
    name: string;
    description: string;
    dueDate: string;
}

type taskState = {
    tasks: task[];
    setTask: (task: task[]) => void;
    removeTask: (task: task) => void;
    addTask: (task: task) => void;
}

export const useTaskStore = create<taskState>()(
    devtools(
        (set) => ({
        tasks: [],
        setTask: (tasks) => set({ tasks}, false , "setTask"),
        removeTask: (task) => set ((state) => ({ tasks: state.tasks.filter((t) => t.id !== task.id) }), false, "removeTask"),
        addTask: (task) => set ((state) => ({ tasks: [...state.tasks, task] }), false, "addTask"),
    }),
    { name: 'task-store' }
    )
)
       

