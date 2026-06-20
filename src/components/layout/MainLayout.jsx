import FilterPanel from "../filters/FiltersPanel"
import TaskList from "../tasks/TasksList"

function MainLayout({ filters, tasks, filtersValue, setFiltersValue }) {
    return (
        <section
            className="
                xl:grid
                xl:grid-cols-[1fr_340px]
                flex
                flex-col
                gap-6
            "
        >
            
            <FilterPanel filters={filters} filtersValue={filtersValue} filte setFiltersValue={setFiltersValue} />
            <h2 className="
                text-xl
                font-semibold
                xl:order-1
                col-span-2
                "
            >
            Bandeja de tareas
            </h2>
            <TaskList tasks={tasks} />

            <div
                className="
                bg-white
                rounded-xl
                shadow-sm
                p-5
                xl:col-start-2 
                xl:col-end-3
                xl:order-4
            "
            >

                <h3
                    className="
                    font-semibold
                    text-lg
                    mb-2
                "
                >
                    🤖 Smart Insights
                </h3>

                <p
                    className="
                    text-sm
                    text-slate-500
                    mb-4
                "
                >
                    Consulta información sobre la bandeja.
                </p>

                <textarea
                    placeholder="Ej: ¿Cuántas tareas de prioridad alta siguen pendientes?"
                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    min-h-[120px]
                "
                ></textarea>

                <button
                    className="
                    mt-3
                    w-full
                    bg-blue-600
                    text-white
                    rounded-lg
                    py-3
                "
                >
                    Generar análisis
                </button>

                {/* <div
                    className="
                    mt-4
                    bg-slate-50
                    rounded-lg
                    p-4
                    text-sm
                    text-slate-700
                "
                >
                    Actualmente existen 35 tareas pendientes.
                    El proceso de Facturación concentra la mayor carga operativa.
                </div> */}

            </div>

        </section>
    )
}

export default MainLayout