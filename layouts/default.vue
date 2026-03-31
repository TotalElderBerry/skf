<script setup>
useHead({
  htmlAttrs: {
    class: 'dark'
  }
})
</script>

<template>
  <div class="min-h-screen bg-[#070114] text-[#f6e6fd] font-body selection:bg-[#cc97ff]/30 transition-colors duration-500">
    <Navbar />
    <slot />
    
    <footer class="mt-12 text-center pb-8 opacity-50 text-[11px] uppercase tracking-widest font-semibold">
      <p>Sangguniang Kabataan Federation Management Portal © 2026</p>
    </footer>
  </div>
</template>

<style>
/* Global Dark Theme Specific Styles */
.dark body {
  background-color: #070114;
  color: #f6e6fd;
}
</style>
