import tasks from '../mocks/tasks.json';

const getTasks = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 500);
    });
};

export async function fetchTasks() {
    try {
        return await getTasks()
    } catch (error) {
        console.error(error);
        return [];
    }
}