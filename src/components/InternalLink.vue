<template>
  <div>
    <router-link
      :to="{ name: pathName, params: { id: pathParam }}"
      class="px-3 py-2 rounded text-white border-2 border-purple-500 bg-purple-500 hover:bg-purple-600 hover:text-white transition-colors"
    >
      <slot>Link</slot>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  pathName: String,
  pathParam: String | Number,
})
</script>

<style scoped>

</style>