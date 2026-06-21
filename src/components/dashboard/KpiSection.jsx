import { useState, useEffect } from "react";
import KpiCard from "./KpiCard";
function KpiSection({ tasks }) {
    const [totalTask, setTotalTasks] = useState(0)
    const [tasksPending, setTasksPending] = useState(0)
    const [tasksProcess, setTasksProcess] = useState(0)
    const [tasksCompleted, setTasksCompleted] = useState(0)

    const setMetrics = (tasks) => {
        setTotalTasks(tasks.length)
        if (tasks.length === 0) return 
        setTasksPending(tasks.reduce((count, object) => {
            if (object.status === "Pendiente") {
                count += 1
            }
            return count
        }, 0))
        setTasksProcess(tasks.reduce((count, object) => {
            if (object.status === "En progreso") {
                count += 1
            }
            return count
        }, 0))
        setTasksCompleted(tasks.reduce((count, object) => {
            if (object.status === "Completada") {
                count += 1
            }
            return count
        }, 0))
    }
    useEffect(() => {
        setMetrics(tasks)
    }, [tasks])

    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard title={"Total Tareas"} value={totalTask}/>
            <KpiCard title={"Pendientes"} value={tasksPending} color={"text-red-500" } />
            <KpiCard title={"En progreso"} value={tasksProcess} color={"text-amber-500" } />
            <KpiCard title={"Completadas"} value={tasksCompleted} color={"text-green-600" } />
        </section>
    )
}

export default KpiSection;