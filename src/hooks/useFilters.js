import { getFilters } from "../services/filtersService";

export async function fetchFilters() {
    try {
        return await getFilters();
    } catch (error) {
        console.error(error);
        return [];
    }
}
