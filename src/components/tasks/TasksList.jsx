import { useState } from "react"
import TaskCard from "./TaskCard"
import TaskDetailModal from "./TaskDetailModal"

function TaskList({ tasks }) {
    const [taskSelected, setTaskSelected] = useState(null)

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
                        grid
                        md:grid-cols-2
                        gap-5
                        overflow-y-auto
                        h-[650px]
                    "
                >   
                    {tasks.map(task => (
                        <TaskCard key={ task.id } task={task} setTaskSelected={setTaskSelected} />
                    ))}



                </div>

            </section>
            <TaskDetailModal taskSelected={ taskSelected } setTaskSelected={ setTaskSelected } />
        </>
    )
}

export default TaskList