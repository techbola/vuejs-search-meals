<template>
    <div>
      <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Meals By Ingredients</h1>
        <Meals :meals="meals" />
      </div>
    </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
})
</script>