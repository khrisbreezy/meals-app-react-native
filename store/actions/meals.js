export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorites = (id) => ({
    type: TOGGLE_FAVORITES,
    mealId: id
});

export const setFilters = (filterSettings) => ({
    type: SET_FILTERS,
    filters: filterSettings
})