<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link v-for="letter in letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
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