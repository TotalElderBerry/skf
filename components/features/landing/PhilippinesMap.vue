<script setup>
import { ref } from 'vue'
import { regions } from '~/data/regions.js'
import MapGrid from './MapGrid.vue';
import MapLandmass from './MapLandmass.vue';
import MapPin from './MapPin.vue';
import MapTooltip from './MapTooltip.vue';

const activeRegion = ref(null)
</script>


<template>
  <div class="map-container scale-125 md:scale-100">
    <svg
      viewBox="0 0 600 620"
      class="map-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MapGrid />
      <MapLandmass />

      <!-- Region pins -->
      <MapPin
        v-for="(region, i) in regions"
        :key="region.id"
        :region="region"
        :index="i"
        :is-active="activeRegion?.id === region.id"
        @mouseenter="activeRegion = region"
        @mouseleave="activeRegion = null"
      />

      <!-- Compass rose -->
      <g transform="translate(530, 560)" class="map-decoration" style="animation-delay: 2.5s">
        <circle r="22" fill="var(--background)" opacity="0.7" stroke="var(--border)" stroke-width="1" />
        <text text-anchor="middle" y="-8" font-size="10" font-family="var(--font-display)" font-weight="600" fill="var(--foreground)">N</text>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="var(--foreground)" stroke-width="1.5" />
        <polygon points="0,-5 -3,2 3,2" fill="var(--foreground)" />
      </g>

      <!-- Scale bar -->
      <g transform="translate(40, 590)" class="map-decoration" style="animation-delay: 2.8s">
        <line x1="0" y1="0" x2="80" y2="0" stroke="var(--foreground)" stroke-width="1.5" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--foreground)" stroke-width="1" />
        <line x1="80" y1="-4" x2="80" y2="4" stroke="var(--foreground)" stroke-width="1" />
        <text x="40" y="12" text-anchor="middle" font-size="7" font-family="var(--font-body)" fill="var(--muted-foreground)">~200 km</text>
      </g>
    </svg>

    <MapTooltip :region="activeRegion" />
  </div>
</template>

<style scoped>
.map-container {
  display: block;
  position: relative;
  width: 100%;
  max-width: 42rem; /* Matches max-w-2xl */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Animations for nested decorations */
.map-decoration {
  opacity: 0;
  animation: fadeDecor 1s ease-out forwards;
}

@keyframes fadeDecor {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
