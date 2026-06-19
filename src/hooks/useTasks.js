import { useState, useEffect} from "react";
import { getTasks } from "../services/taskService";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {

        try {
            const response = await getTasks();
            setTasks(response);
        } catch(error){
            console.error(error);
        } 
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return {
        tasks
    };
}