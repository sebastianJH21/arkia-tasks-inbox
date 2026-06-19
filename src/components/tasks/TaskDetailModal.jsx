function TaskDetailModal({ taskSelected, setTaskSelected }) {
    const task = taskSelected
    return (
        !task ? (<></>) : (
            <>
                <section
                    className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        p-5
        z-100
    "
                >


                    <article
                        className="
        bg-white
        rounded-2xl
        w-full
        max-w-2xl
        p-6
    "
                    >

                        <div
                            className="
            flex
            justify-between
            items-center
            mb-6
        "
                        >

                            <h2
                                className="
                text-2xl
                font-bold
            "
                            >
                                {task.title}
                            </h2>

                            <button className="cursor-pointer"
                            onClick={() => setTaskSelected(null)}
                            >
                                ✕
                            </button>

                        </div>

                        <div
                            className="
            grid
            md:grid-cols-2
            gap-4
        "
                        >

                            <div>
                                <p className="text-sm text-slate-500">
                                    Proceso
                                </p>

                                <p className="font-medium">
                                    {task.process}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Responsable
                                </p>

                                <p className="font-medium">
                                    {task.assignedTo}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Prioridad
                                </p>

                                <p className="font-medium">
                                    {task.priority}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Estado
                                </p>

                                <p className="font-medium">
                                    {task.status}
                                </p>
                            </div>

                        </div>

                        <div className="mt-6">

                            <p
                                className="
                text-sm
                text-slate-500
                mb-2
            "
                            >
                                Descripción
                            </p>

                            <div
                                className="
                bg-slate-50
                rounded-xl
                p-4
            "
                            >
                                {task.description}

                            </div>
                        </div>
                    </article>
                </section >
            </>
        )
    )
}

export default TaskDetailModal