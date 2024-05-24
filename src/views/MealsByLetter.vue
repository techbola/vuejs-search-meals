<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link v-for="letter in letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
      {{  letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem
      v-for="meal of meals"
      :key="meal.idMeal"
      :meal="meal"
    />
  </div>
</template>

<script setup>

import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import MealItem from "../components/MealItem.vue";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

function getMealsByLetter() {
  store.dispatch("searchMealsByLetter", route.params.letter);
}

watch(route, () => {
  getMealsByLetter();

})

onMounted(() => {
  getMealsByLetter();
})
</script>