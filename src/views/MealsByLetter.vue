<template>
  <div class="mt-3">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{  letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>

import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import Meals from "../components/Meals.vue";

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