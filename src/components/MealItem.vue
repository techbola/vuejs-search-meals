<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
    </router-link>
    <div class="px-3">
      <h3 class="py-2 font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="py-2 mb-4 flex items-center justify-between">
        <ExternalLink :href="meal.strYoutube" color="orange">Go to Youtube</ExternalLink>
        <InternalLink path-name="mealDetails" :path-param="meal.idMeal">View</InternalLink>
      </div>
    </div>
  </div>
</template>

<script setup>

import InternalLink from "./InternalLink.vue";
import ExternalLink from "./ExternalLink.vue";
import {computed} from "vue";

function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
}

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  }
});

</script>

<style scoped>

</style>