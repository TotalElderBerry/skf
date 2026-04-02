<script setup>
defineProps({
  size: { 
    type: String, 
    default: 'md', 
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v) 
  },
  variant: { 
    type: String, 
    default: 'primary', // 'primary', 'muted', 'white', 'error'
    validator: (v) => ['primary', 'muted', 'white', 'error', 'indigo'].includes(v)
  },
  weight: { type: String, default: 'medium' }
})

const sizes = {
  xs: 'text-[10px]',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

const variants = {
  primary: 'text-slate-800',
  muted: 'text-slate-500',
  white: 'text-white',
  error: 'text-rose-600',
  indigo: 'text-indigo-600'
}

const weights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black'
}
</script>

<template>
  <p :class="['font-body leading-relaxed', sizes[size], variants[variant], weights[weight]]">
    <slot />
  </p>
</template>