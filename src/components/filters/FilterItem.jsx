import Select from "react-select";
import { useMemo } from "react";

function FilterItem({ filter, value, onChange, tasks }) {
    const options = useMemo(() => {
        if (filter.options) {
            return filter.options.map(option => (
                {
                value: option,
                label:option
                }
            ))
        }
        
        return [...new Set(tasks.map(item => item[filter.field]))].map(option => (
                {
                value: option,
                label:option
                }
            ))
    }, [tasks, filter])

    const input = () => {
        switch (filter.type) {                    
            case "text":
                return (
                    <input
                        className="
                            w-full
                            min-h-[38px]
                            px-3
                            py-2
                            border
                            border-gray-300
                            rounded-md
                            bg-white
                            text-sm
                            focus:outline-none
                            focus:border-blue-500
                            focus:ring-1
                            focus:ring-blue-500
                        "
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                )
            
            case "select":
                return (
                    <Select
                        placeholder="Seleccionar"
                        isClearable
                        menuPortalTarget={document.body}
                        options={options}
                        onChange={(selected) => onChange(selected?.value)}
                        value={
                            value
                            ? options.find(option => option.value === value)
                            : null
                        }
                    />
                )
            }
    }
    return (
        <div>
            <label
                className="
                    block
                    text-sm
                    font-medium
                    mt-2
                    mb-1
                "
            >
                { filter.label }
            </label>
        {
            input()
        }
        </div>  
    )
}

export default FilterItem