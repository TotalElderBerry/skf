<script setup>
useHead({
  htmlAttrs: {
    class: 'dark'
  }
})
</script>

<template>
  <div class="min-h-screen bg-[#070114] text-[#f6e6fd] font-body transition-colors duration-500">
    <slot />
  </div>
</template>

<style>
.dark body {
  background-color: #070114;
  color: #f6e6fd;
}
</style>
