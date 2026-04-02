<script setup>
defineProps({
  region: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <Transition name="glass-slide">
    <div
      v-if="region"
      class="tooltip-card"
    >
      <div class="glow-border"></div>
      <p class="tooltip-title">{{ region.name }}</p>
      <p class="tooltip-desc">{{ region.description }}</p>
    </div>
  </Transition>
</template>

<style scoped>
/* NeoAI Dark Glassmorphism Tooltip */
.tooltip-card {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  
  /* Deep purple dark glass */
  background-color: rgba(14, 5, 33, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  /* 1px solid gradient replacement via border image or normal border */
  border: 1px solid rgba(168, 85, 247, 0.4); 
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  
  /* Neon purple drop shadow */
  box-shadow: 0 10px 30px -5px rgba(126, 34, 206, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  
  max-width: 20rem;
  text-align: center;
  pointer-events: none;
  z-index: 50;
  
  opacity: 1;
  transform: translate(-50%, 0);
  will-change: transform, opacity;
}

.tooltip-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
  margin: 0;
}

.tooltip-desc {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin: 0.3rem 0 0 0;
  line-height: 1.5;
}

/* Slide in from bottom */
.glass-slide-enter-active,
.glass-slide-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-slide-enter-from,
.glass-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, 15px); 
}
</style>
