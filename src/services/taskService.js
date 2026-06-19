import tasks from '../mocks/tasks.json';
export const getTasks = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 500);
    });
};