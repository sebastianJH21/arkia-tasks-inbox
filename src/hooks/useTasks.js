import { getTasks } from "../services/taskService";

export async function fetchTasks() {
    try {
        return await getTasks();
    } catch (error) {
        console.error(error);
        return [];
    }
}