
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
                    className="
                        bg-red-100
                        text-red-600
                        px-3
                        py-1
                        rounded-full
                        text-xs
                    "
                >
                    {task.priority}
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