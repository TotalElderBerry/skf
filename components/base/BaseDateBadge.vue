<script setup>
const props = defineProps({
  month: { type: String, required: true },
  day: { type: [String, Number], required: true },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'white'].includes(v)
  }
})

const variantClasses = {
  primary: 'bg-indigo-50 text-indigo-600',
  white: 'bg-white text-slate-800 border border-slate-100'
}
</script>

<template>
  <div 
    :class="[
      'w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-colors',
      variantClasses[variant]
    ]"
  >
    <span class="text-[9px] font-black uppercase tracking-tighter leading-none mb-0.5">{{ month }}</span>
    <span class="text-lg font-black leading-none">{{ day }}</span>
  </div>
</template>
