<script setup>
defineProps({
  delay: {
    type: [Number, String],
    default: 0
  },
  positionClasses: {
    type: String,
    required: true
  },
  floatDelay: {
    type: String,
    default: '0s'
  },
  floatDuration: {
    type: String,
    default: '6s'
  },
  scale: {
    type: String,
    default: '1'
  },
  origin: {
    type: String,
    default: 'center'
  }
})
</script>

<template>
  <div 
    v-reveal="delay" 
    :class="[
      'absolute glass-card p-4 sm:p-5 rounded-2xl z-20 animate-float shadow-2xl border-white/20',
      positionClasses
    ]"
    :style="{ 
      animationDelay: floatDelay, 
      animationDuration: floatDuration,
      transform: `scale(${scale})`,
      transformOrigin: origin
    }"
  >
    <slot />
  </div>
</template>
