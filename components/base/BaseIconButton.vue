<script setup>
defineProps({
  icon: { type: String, required: true },
  variant: { 
    type: String, 
    default: 'secondary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: { type: String, default: 'md' }
})

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-slate-100 text-slate-600 hover:bg-slate-200',
  ghost: 'bg-transparent text-slate-500 hover:bg-slate-100'
}

const sizes = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3'
}

const iconSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl'
}
</script>

<template>
  <button 
    type="button"
    :class="[
      'rounded-xl transition-colors flex items-center justify-center active:scale-95',
      variants[variant],
      sizes[size]
    ]"
  >
    <span :class="['mdi', icon, iconSizes[size]]"></span>
  </button>
</template>