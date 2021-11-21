import { MEALS } from '../../data/dummy-data';

import { TOGGLE_FAVORITES, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES :
            const existingFave = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingFave >= 0) {
                const updatedFave = [...state.favoriteMeals];
                updatedFave.splice(existingFave, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFave
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }
        case SET_FILTERS :
            const appliedFilters = action.filters;
            const updatedFilters = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                return meal;
            })
            // const filteredState = state.meals.filter(meal => meal.isGlutenFree === action.filters.glutenFree || meal.isVegan === action.filters.vegan || meal.isLactoseFree === action.filters.lactoseFree || meal.isVegetarian === action.filters.vegetarian);
            return {
                ...state,
                filteredMeals: updatedFilters
            }

        default: return state;
    }
}

export default mealsReducer;