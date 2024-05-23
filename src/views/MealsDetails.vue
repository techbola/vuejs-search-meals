<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-48 object-cover"
    />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </template>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strMeasure${ind + 1}`]">
            {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </template>
      </div>
    </div>

    <div class="mt-4 flex items-center gap-4">
      <ExternalLink :href="meal.strYoutube" color="red">Go to Youtube</ExternalLink>
      <ExternalLink :href="meal.strSource" color="purple">View Original Source</ExternalLink>
    </div>

  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import store from "../store/index.js";
import ExternalLink from "../components/ExternalLink.vue";

const route = useRoute();
const meal = computed(() => store.state.mealDetails)

function getMealDetails() {
  store.dispatch('getMealDetails', route.params.id)
}
onMounted(() => {
  getMealDetails();
})
</script>

<style scoped>
</style>