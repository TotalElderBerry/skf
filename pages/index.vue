<script setup>
import { onMounted, ref } from 'vue'
import FaqAndCtaSection from '../components/features/landing/FaqAndCtaSection.vue';
import PricingSection from '../components/features/landing/PricingSection.vue';
import CapabilitiesSection from '../components/features/landing/CapabilitiesSection.vue';
import FeaturesSection from '../components/features/landing/FeaturesSection.vue';
import HeroSection from '../components/features/landing/HeroSection.vue';

// Animations hooks for Vue
const isMounted = ref(false)
onMounted(() => {
  setTimeout(() => isMounted.value = true, 50)
})
</script>


<template>
  <div class="min-h-screen bg-[#070114] font-body text-zinc-200 relative overflow-hidden selection:bg-purple-500/30 selection:text-white dark-theme">
    
    <!-- Neon Auras / Abstract Glow Background based on NeoAI design -->
    <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#EAB308]/10 blur-[120px] -z-10 animate-pulse" style="animation-duration: 6s;"></div>
    <div class="absolute top-[10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#B345FF]/15 blur-[120px] -z-10"></div>
    <div class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#8338EC]/10 blur-[150px] -z-10"></div>
    <!-- Mesh pattern overlay for subtle texture -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10 mix-blend-overlay"></div>

    <!-- Hero Content Component (Modern Centered Style) -->
    <HeroSection />
    
    <!-- Expanded Dribbble Content Ported to SK-Fed -->
    <div id="features">
      <FeaturesSection v-reveal />
    </div>
    
    <div id="advantages">
      <CapabilitiesSection v-reveal />
    </div>
    
    <div id="pricing">
      <PricingSection v-reveal />
    </div>
    
    <div id="faq">
      <FaqAndCtaSection v-reveal />
    </div>
    
  </div>
</template>

<style>
/* Landing Page Specific overrides (Non-scoped to allow component inheritance) */
.landing-page {
  /* This ensures the body-level bg is handled properly for the landing view */
  min-height: 100vh;
}
</style>

