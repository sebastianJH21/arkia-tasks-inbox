import FilterItem from "./FilterItem"

function FilterPanel({ filters, filtersValue, setFiltersValue, resetFilters, tasks }) {
    return (
        <aside
            className="
                bg-white
                rounded-xl
                shadow-sm
                p-5
                xl:order-3
            "
        >
            <h3
                className="
                    font-semibold
                    text-lg
                    mb-1
                "
            >
                Filtros
            </h3>
            <div
                className="
                    pace-y-4
                    overflow-y-auto
                    h-[220px]
                "
            >
                {
                    filters.map(filter => (
                        <FilterItem
                            key={filter.field}
                            filter={filter}
                            tasks={tasks}
                            value={filtersValue[filter.field] || ""}
                            onChange={(value) => {
                                setFiltersValue(prev => ({
                                    ...prev,
                                    [filter.field]: value
                                }));
                            }}
                        />
                    ))
                }
            </div>
            <button
                className="
                    mt-3
                    w-full
                    text-white
                    rounded-lg
                    py-2
                    bg-blue-600 cursor-pointer hover:bg-blue-700
                "
                onClick={resetFilters}
            >
                Limpiar Filtros
            </button>
        </aside>
    )
}

export default FilterPanel