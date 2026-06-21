import { useState, useEffect } from "react"
import TaskCard from "./TaskCard"
import TaskDetailModal from "./TaskDetailModal"
import TaskLoading from "./TasksLoading"

function TaskList({ tasks, loading }) {
    const [taskSelected, setTaskSelected] = useState(null)
    useEffect(() => {
        const hadleKeyEscape = (event) => {
            if (event.key === "Escape") {
                setTaskSelected(null)
            }
        }

        window.addEventListener("keydown", hadleKeyEscape)
    }, [])

    return (
        <>
            <section
                className="
                    xl:order-2
                    xl:row-span-2
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        overflow-y-auto
                        max-h-[650px]
                    "
                >
                    {loading ? (
                        <TaskLoading loading={loading} />
                    ) : (
                        tasks.length !== 0 ? (
                            tasks.map(task => (
                                <TaskCard key={task.id} task={task} setTaskSelected={setTaskSelected} />
                            ))
                        ) : (
                            <TaskLoading loading={loading} />
                        ))}
                </div>
            </section>
            <TaskDetailModal taskSelected={taskSelected} setTaskSelected={setTaskSelected} />
        </>
    )
}

export default TaskList