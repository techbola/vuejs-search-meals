<template>
    <div class="p-8 pb-0">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
        @change="searchMeals"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link to="/">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <div class="px-3">
          <h3 class="py-2 font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">
            Debitis eligendi esse itaque mollitia nesciunt officia perspiciatis qui
            soluta. Accusantium aliquam amet consequuntur debitis dolorum enim error
            iusto laborum maiores, nesciunt pariatur quos sapiente similique sunt
            unde velit voluptates!
          </p>
          <div class="py-2 mb-4 flex items-center justify-between">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 rounded text-white border-2 border-red-500 bg-red-500 hover:bg-red-600 hover:text-white transition-colors"
            >
              Youtube
            </a>
            <router-link
              to="/"
              class="px-3 py-2 rounded text-white border-2 border-purple-500 bg-purple-500 hover:bg-purple-600 hover:text-white transition-colors"
            >View</router-link>
          </div>
        </div>

      </div>
    </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
  import store from "../store/index.js";
  import {useRoute} from "vue-router";

  const route = useRoute();
  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals)

  function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
  }

  onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
      searchMeals();
    }
  })
</script>