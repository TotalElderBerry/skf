<script setup>
defineProps({
  padding: { type: String, default: 'p-6' },
  hover: { type: Boolean, default: false },
  overflow: { type: String, default: 'overflow-hidden' }
})
</script>

<template>
  <div class="bg-white border border-slate-200 shadow-sm relative flex flex-col overflow-hidden transition-all duration-300 rounded-[2rem]">
    <div :class="['flex-grow flex flex-col', padding]">
      <slot />
    </div>
    <div v-if="$slots.footer" class="mt-auto border-t border-slate-50 p-6 bg-white">
      <slot name="footer" />
    </div>
  </div>
</template>