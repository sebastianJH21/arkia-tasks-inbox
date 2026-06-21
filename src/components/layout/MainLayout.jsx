import FilterPanel from "../filters/FiltersPanel"
import SmartInsights from "../insights/SmartInsights"
import TaskList from "../tasks/TasksList"

function MainLayout({ filters, tasks, filtersValue, setFiltersValue, loading}) {
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
            <FilterPanel
                filters={filters}
                filtersValue={filtersValue}
                filte setFiltersValue={setFiltersValue}
                tasks={tasks} />
            <h2
                className="
                    text-xl
                    font-semibold
                    xl:order-1
                    col-span-2
                "
            >
            Bandeja de tareas
            </h2>
            <TaskList tasks={tasks} loading={loading} />
            <SmartInsights />
        </section>
    )
}

export default MainLayout