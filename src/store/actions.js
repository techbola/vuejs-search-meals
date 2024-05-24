import axiosClient from "../axiosClient.js";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
  })
}

export function getMealDetails({ commit }, mealId) {
  axiosClient.get(`lookup.php?i=${mealId}`)
    .then(({ data }) => {
      commit('setMealDetails', data.meals[0] || {})
    })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      commit('setMealsByIngredient', data.meals)
    })
}