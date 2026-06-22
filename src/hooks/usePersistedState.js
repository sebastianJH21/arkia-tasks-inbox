import { useState, useEffect } from "react";

export function usePersistedState(key, initialValue) {

    const [value, setValue] = useState(() => {

        const saved = localStorage.getItem(key);

        return saved
            ? JSON.parse(saved)
            : initialValue;
    });

    useEffect(() => {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }, [key, value]);

    const resetFilters = () => {
        localStorage.removeItem(key);
        setValue(initialValue);
    };

    return [value, setValue, resetFilters];
}