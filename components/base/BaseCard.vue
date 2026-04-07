<script setup>
const props = defineProps({
  padding: { type: String, default: 'p-6' },
  hover: { type: Boolean, default: false },
  overflow: { type: String, default: 'overflow-hidden' },
  elevation: { 
    type: String, 
    default: 'sm',
    validator: (v) => ['none', 'sm', 'md', 'lg', 'xl'].includes(v)
  },
  border: { type: Boolean, default: true },
  variant: {
    type: String,
    default: 'white',
    validator: (v) => ['white', 'glass', 'surface'].includes(v)
  }
})

const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl'
}

const variantClasses = {
  white: 'bg-white',
  glass: 'bg-white/70 backdrop-blur-md border-white/20',
  surface: 'bg-slate-50 border-slate-200'
}
</script>

<template>
  <div 
    :class="[
      'relative flex flex-col transition-all duration-300 rounded-[2rem]',
      overflow,
      shadowClasses[elevation],
      variantClasses[variant],
      { 'border': border },
      { 'border-slate-200': border && variant === 'white' },
      { 'hover:shadow-xl hover:-translate-y-1': hover }
    ]"
  >
    <div :class="['flex-grow flex flex-col', padding]">
      <slot />
    </div>
    <div v-if="$slots.footer" class="mt-auto border-t border-slate-50 p-6 bg-white/50">
      <slot name="footer" />
    </div>
  </div>
</template>