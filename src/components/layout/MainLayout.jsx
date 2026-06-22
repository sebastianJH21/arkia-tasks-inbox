import FilterPanel from "../filters/FiltersPanel"
import SmartInsights from "../insights/SmartInsights"
import TaskList from "../tasks/TasksList"

function MainLayout({ filters, tasks, visibleTasks, filtersValue, setFiltersValue, resetFilters, loading}) {
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
                setFiltersValue={setFiltersValue}
                resetFilters={resetFilters}
                tasks={visibleTasks} />
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
            <TaskList tasks={visibleTasks} loading={loading} />
            <SmartInsights tasks={tasks} />
        </section>
    )
}

export default MainLayout