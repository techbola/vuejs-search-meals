<template>
  <div>
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full mb-3"
        placeholder="Search for Ingredients"
      />

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <a
          href="#"
          @click.prevent="openIngredient(ingredient)"
          v-for="ingredient of filteredIngredients"
          :key="ingredient.idIngredient"
          class="block bg-white rounded p-3 mb-3 shadow"
        >
          <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient}}</h3>
        </a>
      </div>

<!--      <router-link-->
<!--        :to="{name: 'byIngredient', params: { ingredient: ingredient.strIngredient }}"-->
<!--        v-for="ingredient of filteredIngredients"-->
<!--        :key="ingredient.idIngredient"-->
<!--        class="block bg-white rounded p-3 mb-3 shadow"-->
<!--      >-->
<!--        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient}}</h3>-->
<!--        <p>{{ ingredient.strDescription}}</p>-->
<!--      </router-link>-->
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import axiosClient from "../axiosClient";
import store from "../store/index.js";
import {useRouter} from "vue-router";

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);

const filteredIngredients = computed(() => {
  if (!filteredIngredients) return ingredients;
  return ingredients?.value.filter(i =>
    i.strIngredient?.toLowerCase().includes(keyword.value.toLowerCase())
  )
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient }
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list")
    .then(({ data }) => {
      ingredients.value = data.meals;
    })
})
</script>