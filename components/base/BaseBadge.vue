<script setup>
const props = defineProps({
  variant: { 
    type: String, 
    default: 'secondary',
    validator: (v) => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(v)
  },
  mode: { 
    type: String, 
    default: 'flat', // 'flat' (subtle), 'outlined', 'solid'
    validator: (v) => ['flat', 'outlined', 'solid'].includes(v)
  },
  dot: { type: Boolean, default: false }
})

// 1. Define the base color palette
const palette = {
  primary:   { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', dot: 'bg-indigo-500', solid: 'bg-indigo-600 text-white' },
  secondary: { bg: 'bg-slate-50',  text: 'text-slate-600',  border: 'border-slate-100',  dot: 'bg-slate-400',  solid: 'bg-slate-600 text-white' },
  success:   { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', dot: 'bg-emerald-500 animate-pulse', solid: 'bg-emerald-600 text-white' },
  warning:   { bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-100',  dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]', solid: 'bg-amber-600 text-white' },
  danger:    { bg: 'bg-rose-50',   text: 'text-rose-600',   border: 'border-rose-100',   dot: 'bg-rose-500',   solid: 'bg-rose-600 text-white' }
}

// 2. Logic to determine the final classes based on mode
const getClasses = () => {
  const p = palette[props.variant]
  
  if (props.mode === 'outlined') {
    return `bg-transparent border ${p.border} ${p.text}`
  }
  
  if (props.mode === 'solid') {
    return `border-transparent ${p.solid}`
  }

  // Default: Flat (Subtle background)
  return `border-transparent ${p.bg} ${p.text}`
}
</script>

<template>
  <span 
    :class="[
      'inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border',
      getClasses()
    ]"
  >
    <span 
      v-if="dot" 
      :class="['w-2 h-2 rounded-full', palette[variant].dot]"
    ></span>
    <slot />
  </span>
</template>