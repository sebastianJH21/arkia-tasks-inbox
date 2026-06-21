import filters from '../mocks/filters.json';

const getFilters = async () => {
    return Promise.resolve(filters);
};

export async function fetchFilters() {
    try {
        return await getFilters();
    } catch (error) {
        console.error(error);
        return [];
    }
}