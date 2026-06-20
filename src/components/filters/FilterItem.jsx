// import { useFilters } from "../../hooks/useFilters"

function FilterItem({ filter, value, onChange}) {
    
    return (
        <>
            {filter.type == "select" && (
                <div>
                    <label
                        className="
                        block
                        text-sm
                        font-medium
                        mb-2
                    "
                    >
                        { filter.label }
                    </label>
                    <select
                        className="
                            w-full
                            border
                            rounded-lg
                            px-3
                            py-2
                        "
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        <option value="" > Seleccionar </option>
                        {filter.options.map(option => (
                            <option
                                key={option}
                                value={option}
                            >{option}</option>
                        )) }
                    </select>
                </div>
            )}
        </>
    )
}

export default FilterItem