import filters from '../mocks/filters.json';

const getFilters = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filters)
        }, 500)
    });
};

export async function fetchFilters() {
    try {
        return await getFilters();
    } catch (error) {
        console.error(error);
        return [];
    }
}