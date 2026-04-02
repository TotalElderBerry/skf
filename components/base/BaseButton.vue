<script setup>
// 1. We import resolveComponent to handle NuxtLink correctly
import { resolveComponent } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  type: { type: String, default: 'button' },
  to: { type: [String, Object], default: null }
})

// 2. We determine which component to render
const isTag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  return 'button'
})

const sizeClasses = {
  sm: 'px-4 py-2 text-[10px] rounded-lg tracking-widest uppercase',
  md: 'px-8 py-3 text-sm rounded-xl',
  lg: 'px-10 py-4 text-base rounded-full'
}

const variantClasses = {
  primary: 'bg-primary text-white shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/40',
  secondary: 'bg-surface-lowest text-slate-600 hover:bg-slate-200',
  tertiary: 'bg-transparent text-indigo-600 hover:underline px-0 py-0 flex-none'
}
</script>

<template>
  <component
    :is="isTag"
    v-bind="to ? { to: to } : { type: type }"
    class="cursor-pointer font-headline font-black transition-all active:scale-95 duration-200 inline-flex items-center justify-center text-center"
    :class="[sizeClasses[size], variantClasses[variant]]"
  >
    <slot />
  </component>
</template>