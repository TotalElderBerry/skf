<template>
  <g class="map-grid">
    <!-- Water background -->
    <rect width="600" height="620" fill="var(--map-water)" rx="12" />

    <!-- Grid lines for cartographic feel -->
    <line 
      v-for="x in [100, 200, 300, 400, 500]" 
      :key="`vl-${x}`" 
      :x1="x" y1="0" :x2="x" y2="620" 
      class="grid-line"
    />
    <line 
      v-for="y in [100, 200, 300, 400, 500, 600]" 
      :key="`hl-${y}`" 
      x1="0" :y1="y" x2="600" :y2="y" 
      class="grid-line" 
    />
  </g>
</template>

<style scoped>
rect {
  opacity: 0;
  animation: fadeWater 1.5s ease-out forwards;
}

.grid-line {
  stroke: var(--border);
  stroke-width: 0.5;
  stroke-dasharray: 4 4;
  opacity: 0;
  animation: fadeGrid 2s ease-out forwards;
}

/* Stagger the vertical vs horizontal lines */
line[y1="0"] {
  animation-delay: 0.4s;
}
line[x1="0"] {
  animation-delay: 0.8s;
}

@keyframes fadeWater {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeGrid {
  from { opacity: 0; }
  to { opacity: 0.4; }
}
</style>
