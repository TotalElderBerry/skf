<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: null },
  icon: { type: String, default: null }
})
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 mt-4">
    <div class="flex items-center gap-4">
      <div v-if="icon" class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-100">
        <span :class="['mdi', icon]"></span>
      </div>
      <div>
        <BaseHeading level="3" weight="black" tracking="tighter" class="mb-1 leading-none text-slate-900">
          {{ title }}
        </BaseHeading>
        <p v-if="subtitle" class="text-[10px] font-black uppercase tracking-widest text-slate-400">
          {{ subtitle }}
        </p>
      </div>
    </div>
    
    <div v-if="$slots.actions" class="flex gap-3 w-full md:w-auto items-center">
      <slot name="actions" />
    </div>
  </div>
</template>
