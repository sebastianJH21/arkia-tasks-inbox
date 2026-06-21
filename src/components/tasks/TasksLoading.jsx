function TaskLoading({ loading }) {
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
        >
            <div
                className="
                    flex
                    justify-center
                    items-start
                    text-center
                "
            >
                {loading ? (
                
                    <h3
                        className="
                            font-semibold
                            text-slate-800
                            animate-pulse
                        "
                    >
                    Cargando...
                </h3>
                ) : (
                    <h3
                        className="
                            font-semibold
                            text-slate-800
                        "
                    >
                        No se encontraton tareas
                    </h3>
                )}
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

export default TaskLoading