import FilterItem from "./FilterItem"

function FilterPanel({ filters, filtersValue, setFiltersValue }) {



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
                    mb-4
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
                {/* {filters.map(filter => (
                    <FilterItem key={filter.field} filter={filter} filtersValue={filtersValue} setFiltersValue={setFiltersValue} />
                    
                ))} */}
                {/* <div>
                        <label
                            className="
                            block
                            text-sm
                            font-medium
                            mb-2
                        "
                        >
                            Estado
                        </label>
                        <select
                            className="
                            w-full
                            border
                            rounded-lg
                            px-3
                            py-2
                        "
                        >
                            <option>Todos</option>
                            <option>Pendiente</option>
                            <option>En progreso</option>
                            <option>Completada</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="
                            block
                            text-sm
                            font-medium
                            mb-2
                        "
                        >
                            Estado
                        </label>
                        <select
                            className="
                            w-full
                            border
                            rounded-lg
                            px-3
                            py-2
                        "
                        >
                            <option>Todos</option>
                            <option>Pendiente</option>
                            <option>En progreso</option>
                            <option>Completada</option>
                        </select>

                    </div>

                    <div>

                        <label
                            className="
                            block
                            text-sm
                            font-medium
                            mb-2
                        "
                        >
                            Prioridad
                        </label>

                        <select
                            className="
                            w-full
                            border
                            rounded-lg
                            px-3
                            py-2
                        "
                        >
                            <option>Todas</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>

                    </div>
                    <div>

                        <label
                            className="
                            block
                            text-sm
                            font-medium
                            mb-2
                        "
                        >
                            Prioridad
                        </label>

                        <select
                            className="
                            w-full
                            border
                            rounded-lg
                            px-3
                            py-2
                        "
                        >
                            <option>Todas</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>

                    </div> */}

            </div>

        </aside>
    )
}

export default FilterPanel