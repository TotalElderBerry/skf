<template>
  <g class="map-landmass">
    <!-- Luzon -->
    <path d="M270,60 L310,55 L340,65 L360,80 L355,110 L340,130 L350,150 L340,170 L330,190 L340,210 L335,240 L360,260 L380,280 L390,310 L370,320 L350,300 L330,270 L310,250 L300,230 L280,220 L270,200 L260,180 L250,160 L240,140 L250,120 L260,100 L265,80 Z" />

    <!-- Mindoro / Palawan area -->
    <path d="M210,250 L230,240 L250,260 L245,290 L230,310 L215,340 L200,370 L185,390 L175,380 L180,350 L190,320 L200,290 L205,270 Z" />

    <!-- Visayas cluster -->
    <path d="M260,330 L290,325 L310,340 L300,360 L280,365 L265,355 Z" stroke-width="1.2" />
    <path d="M310,350 L340,345 L360,360 L365,385 L345,395 L320,390 L305,375 Z" stroke-width="1.2" />
    <path d="M365,310 L395,315 L405,340 L400,365 L380,355 L370,330 Z" stroke-width="1.2" />

    <!-- Mindanao -->
    <path d="M240,420 L270,410 L300,405 L330,410 L360,415 L390,420 L400,445 L395,470 L385,495 L370,520 L350,535 L320,540 L290,535 L265,525 L245,510 L235,485 L230,460 L235,440 Z" />

    <!-- Small islands -->
    <ellipse cx="200" cy="420" rx="20" ry="12" />
    <ellipse cx="420" cy="290" rx="12" ry="8" />
  </g>
</template>

<style scoped>
/* Beautiful SVG Line Drawing Effect */
.map-landmass path,
.map-landmass ellipse {
  fill: transparent;
  stroke: var(--primary);
  stroke-width: 1.5;
  opacity: 0;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: drawMap 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.map-landmass path[stroke-width="1.2"] {
  stroke-width: 1.2;
}

.map-landmass ellipse {
  stroke-width: 1;
}

/* Stagger the island drawing sequence */
.map-landmass *:nth-child(1) { animation-delay: 0.2s; }
.map-landmass *:nth-child(2) { animation-delay: 0.4s; }
.map-landmass *:nth-child(3) { animation-delay: 0.6s; }
.map-landmass *:nth-child(4) { animation-delay: 0.7s; }
.map-landmass *:nth-child(5) { animation-delay: 0.8s; }
.map-landmass *:nth-child(6) { animation-delay: 1.0s; }
.map-landmass *:nth-child(7) { animation-delay: 1.2s; }
.map-landmass *:nth-child(8) { animation-delay: 1.3s; }

@keyframes drawMap {
  0% {
    stroke-dashoffset: 2000;
    opacity: 0;
    fill: transparent;
  }
  20% {
    opacity: 1;
  }
  70% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.85;
    fill: var(--map-land);
  }
}
</style>
