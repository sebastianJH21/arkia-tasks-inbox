
function TaskCard({ task, setTaskSelected }) {
    return (
        <article
            className="
                bg-white
                rounded-xl
                shadow-sm
                border
                border-slate-200
                p-5
                mr-2
                hover:shadow-md
                transition
                cursor-pointer
            "
            onClick={() => setTaskSelected(task)}
        >
            <div
                className="
                    flex
                    justify-between
                    items-start
                "
            >
                <h3
                    className="
                        font-semibold
                        text-slate-800
                    "
                >
                    {task.title}
                </h3>

                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-s
                        ${
                            task.status === "Completada"
                            ? 'bg-green-100 text-green-600'
                            : task.priority === "Alta" 
                            ? 'bg-red-100 text-red-600'
                            : task.priority === "Media"
                            ? 'bg-amber-100 text-amber-600'
                            : 'bg-blue-100 text-blue-600'
                        }
                    `}
                >   
                    {task.status === "Completada" ? task.status : task.priority}
                </span>
            </div>

            <div
                className="
                    mt-4
                    space-y-2
                    text-sm
                    text-slate-600
                "
            >
                <p>
                    <strong>Proceso: </strong>
                    {task.process}
                </p>
                <p>
                    <strong>Responsable: </strong>
                    {task.assignedTo}
                </p>
                <p>
                    <strong>Estado: </strong>
                    {task.status}
                </p>
                <p>
                    <strong>Fecha: </strong>
                    {task.createdAt}
                </p>
            </div>
            <div
                className="
                    mt-4
                    border-t
                    flex
                    justify-end
                "
            >
            </div>
        </article>
    )
}

export default TaskCard