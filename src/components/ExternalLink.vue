<template>
  <div>
    <a
      :href="href"
      target="_blank"
      :class="`px-3 py-2 rounded text-white border-2 border-${color}-500 bg-${color}-500 hover:bg-${color}-600 hover:text-white transition-colors`"
    >
      <slot>Button</slot>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  href: String,
  color: String,
})
</script>

<style scoped>

</style>