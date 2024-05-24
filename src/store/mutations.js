export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}

export function setMealDetails(state, mealDetails) {
  state.mealDetails = mealDetails || []
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || []
}