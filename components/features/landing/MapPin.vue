<script setup>
defineProps({
  region: { type: Object, required: true },
  isActive: { type: Boolean, required: true },
  index: { type: Number, required: true }
})
defineEmits(['mouseenter', 'mouseleave'])
</script>

<template>
  <g
    class="cursor-pointer pin-group"
    :style="{ animationDelay: `${1.5 + index * 0.12}s` }"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <!-- Pin glow -->
    <circle
      :cx="region.x"
      :cy="region.y"
      r="10"
      fill="var(--map-pin)"
      opacity="0.15"
      class="map-pin-pulse"
      :style="{ animationDelay: `${index * 0.12}s` }"
    />
    <!-- Pin dot -->
    <circle
      :cx="region.x"
      :cy="region.y"
      :r="isActive ? 7 : 5"
      :fill="isActive ? 'var(--secondary)' : 'var(--map-pin)'"
      stroke="var(--background)"
      stroke-width="2"
      class="transition-all duration-200"
    />
    <!-- Pin label -->
    <text
      :x="region.x"
      :y="region.y - 14"
      text-anchor="middle"
      fill="var(--foreground)"
      font-size="7"
      font-family="var(--font-body)"
      font-weight="500"
      class="transition-all duration-200"
      :opacity="isActive ? 1 : 0.7"
    >
      {{ region.shortName }}
    </text>
  </g>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.transition-all {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base mounting drop-in animation */
.pin-group {
  opacity: 0;
  /* Using SVG compatible CSS transforms */
  transform: translateY(-15px);
  animation: dropIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes dropIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulsing idle animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.map-pin-pulse {
  transform-origin: center;
  transform-box: fill-box;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
