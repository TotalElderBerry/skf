<script setup>
const props = defineProps({
  level: { 
    type: [String, Number], 
    default: 1,
    validator: (v) => [1, 2, 3, 4, 5, 6].includes(Number(v))
  },
  weight: { 
    type: String, 
    default: 'black' // 'black', 'bold', 'medium'
  },
  tracking: { 
    type: String, 
    default: 'tight' // 'tighter', 'tight', 'normal'
  }
})

const tag = `h${props.level}`

const sizes = {
  1: 'text-5xl md:text-7xl',
  2: 'text-4xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base'
}

const weights = {
  black: 'font-black',
  bold: 'font-bold',
  semibold: 'font-semibold',
  medium: 'font-medium'
}

const trackings = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal'
}
</script>

<template>
  <component 
    :is="tag" 
    :class="[
      'font-headline text-slate-900 leading-[1.1]', 
      sizes[level], 
      weights[weight], 
      trackings[tracking]
    ]"
  >
    <slot />
  </component>
</template>