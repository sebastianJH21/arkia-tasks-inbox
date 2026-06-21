function Header() {
    return (
        <header
            className="
                bg-white
                border-b
                border-slate-200
                sticky
                top-0 z-20
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-4
                    flex
                    justify-between
                    items-center
                "
            >
                <div>
                    <h1
                        className="
                            text-2xl
                            font-bold
                            text-slate-800
                        "
                    >
                        Arkia Task Inbox
                    </h1>
                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        Gestión de tareas y procesos
                    </p>
                </div>
                <div
                    className="
                        text-sm
                        text-slate-500
                    "
                >
                    Sebastián Jiménez
                </div>
            </div>
        </header>
    )
}

export default Header