<script setup>
import { ref } from 'vue'

const activeCard = ref(0) // Start with the first card active
let interval = null

const startCycle = () => {
  interval = setInterval(() => {
    // Cycles 0 -> 1 -> 2 -> 0...
    activeCard.value = (activeCard.value + 1) % 3
  }, 3000) // 3 seconds per card
}

onMounted(() => {
  startCycle()
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
const toggleCard = (index) => {
  activeCard.value = activeCard.value === index ? null : index
}
</script>

<template>
  <section class="container max-w-7xl mx-auto px-6 py-24 relative z-10">
    
    <!-- Client Logos (Integrations) Marquee -->
    <div v-reveal class="relative border-b border-white/5 pb-24 overflow-hidden mask-edges -mx-6 px-6">
      <div class="flex items-center w-max animate-marquee opacity-40 grayscale hover:opacity-80 hover:grayscale-[0.2] transition-all duration-700">
        <div v-for="i in 4" :key="i" class="flex items-center gap-12 sm:gap-16 md:gap-24 px-6 sm:px-8 md:px-12">
          <span class="font-display font-bold text-xl sm:text-2xl tracking-widest text-white/90 uppercase">DILG</span>
          <span class="font-display font-bold text-xl sm:text-2xl tracking-widest text-white/90 uppercase">NYC</span>
          <span class="font-display font-bold text-xl sm:text-2xl tracking-widest text-white/90 uppercase">SK Federation</span>
          <span class="font-display font-bold text-xl sm:text-2xl tracking-widest text-white/90 uppercase">GovPH</span>
          <span class="font-display font-bold text-xl sm:text-2xl tracking-widest text-white/90 uppercase">LGU Network</span>
        </div>
      </div>
    </div>

    <!-- Key Advantages Title -->
    <div v-reveal class="mt-32 text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Advantages
      </div>
      <h2 class="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
        Key Advantages <br />
        <span class="text-purple-300">of SKLoud Platform</span>
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div 
        v-reveal="100" 
        @click="toggleCard(0)"
        class="relative p-[1px] rounded-[2rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.3)] cursor-pointer"
        :class="activeCard === 0 ? 'scale-[1.02] -translate-y-2 shadow-[0_30px_60px_-15px_rgba(168,85,247,0.3)]' : ''"
      >
        <!-- Animated Gradient Border -->
        <div 
          class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 bg-[length:200%_auto] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          :class="activeCard === 0 ? 'opacity-100' : ''"
        ></div>
        <div 
          class="absolute inset-0 rounded-[2rem] bg-white/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
          :class="activeCard === 0 ? 'opacity-0' : ''"
        ></div>
        
        <!-- Inner Card -->
        <div class="relative h-full bg-[#0A051A]/95 p-8 rounded-[calc(2rem-1px)] flex flex-col items-center text-center overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-[#140C2E]/80 to-transparent pointer-events-none"></div>
          <!-- Abstract gradient glow -->
          <div 
            class="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] group-hover:bg-purple-500/30 transition-colors animate-blob"
            :class="activeCard === 0 ? 'bg-purple-500/30' : ''"
          ></div>
          <h3 class="text-xl font-bold text-white mb-3 relative z-10">Instant reporting processing</h3>
          <p class="text-sm text-purple-200/50 mb-10 relative z-10">Real-time council unified data.</p>
          
          <!-- Mock UI Element -->
          <div class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-auto relative z-10 shadow-lg shadow-black/50">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center p-1.5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="text-left">
                <p class="text-[11px] font-semibold text-white">Report is complete! 🚀</p>
                <p class="text-[9px] text-purple-200/50">Your council data is integrated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 (Center, Taller, Highlight) -->
      <div 
        v-reveal="250" 
        @click="toggleCard(1)"
        class="relative p-[1px] rounded-[2rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(234,179,8,0.25)] md:-mt-8 md:mb-8 md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer"
        :class="activeCard === 1 ? 'scale-[1.02] -translate-y-2 shadow-[0_40px_80px_-15px_rgba(234,179,8,0.25)]' : ''"
      >
        <div 
          class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 bg-[length:200%_auto] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          :class="activeCard === 1 ? 'opacity-100' : ''"
        ></div>
        <div 
          class="absolute inset-0 rounded-[2rem] bg-white/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
          :class="activeCard === 1 ? 'opacity-0' : ''"
        ></div>

        <div class="relative h-full bg-[#0A051A]/95 p-8 rounded-[calc(2rem-1px)] flex flex-col items-center text-center overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-[#140C2E]/80 to-transparent pointer-events-none"></div>
          <div class="absolute inset-0 w-full h-full bg-yellow-500/5 blur-[80px] animate-blob" style="animation-delay: 2s;"></div>
          <h3 class="text-xl font-bold text-white mb-3 relative z-10">Data-driven Oversight</h3>
          <p class="text-sm text-purple-200/50 mb-10 relative z-10">Stable and reliable tracking for thousands of youth councils.</p>
          
          <!-- Mock Phone/Dashboard Graph -->
          <div class="w-2/3 aspect-[9/16] bg-[#0A051A] rounded-3xl border-4 border-zinc-800 shadow-2xl relative z-10 mt-auto overflow-hidden">
            <div class="h-6 w-full flex justify-center pt-2"><div class="w-10 h-1 bg-zinc-800 rounded-full"></div></div>
            <!-- Fake Graph Lines -->
            <div class="absolute bottom-0 inset-x-0 h-1/2 flex items-end">
               <svg viewBox="0 0 100 50" class="w-full h-full text-yellow-500 opacity-60" fill="none" preserveAspectRatio="none">
                 <path d="M0,50 L0,30 C20,10 40,40 60,20 C80,0 90,30 100,10 L100,50 Z" fill="currentColor" opacity="0.1" />
                 <path d="M0,30 C20,10 40,40 60,20 C80,0 90,30 100,10" stroke="currentColor" stroke-width="2" />
               </svg>
            </div>
            <!-- Fake Data Pill -->
            <div class="absolute top-12 left-4 right-4 bg-white/10 rounded-xl p-2 flex justify-between">
              <div>
                <div class="h-1 w-8 bg-white/20 rounded mb-1"></div>
                <div class="h-2 w-12 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div 
        v-reveal="400" 
        @click="toggleCard(2)"
        class="relative p-[1px] rounded-[2rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15_rgba(16,185,129,0.3)] cursor-pointer"
        :class="activeCard === 2 ? 'scale-[1.02] -translate-y-2 shadow-[0_40px_80px_-15px_rgba(16,185,129,0.3)]' : ''"
      >
        <div 
          class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 bg-[length:200%_auto] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          :class="activeCard === 2 ? 'opacity-100' : ''"
        ></div>
        <div 
          class="absolute inset-0 rounded-[2rem] bg-white/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
          :class="activeCard === 2 ? 'opacity-0' : ''"
        ></div>

        <div class="relative h-full bg-[#0A051A]/95 p-8 rounded-[calc(2rem-1px)] flex flex-col items-center text-center overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-[#140C2E]/80 to-transparent pointer-events-none"></div>
          <div 
            class="absolute top-0 left-0 w-32 h-32 bg-emerald-500/20 blur-[50px] group-hover:bg-emerald-500/30 transition-colors animate-blob" 
            :class="activeCard === 2 ? 'bg-emerald-500/30' : ''"
            style="animation-delay: 4s;"
          ></div>
          <h3 class="text-xl font-bold text-white mb-3 relative z-10">Centralized Control</h3>
          <p class="text-sm text-purple-200/50 mb-10 relative z-10">SKLoud instantly processes mandates and connects SK officials nationwide.</p>
          
          <div class="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-auto relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <div class="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
               <svg class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.092 2.022-.273 3.003L15.42 15m.002 0l-1.062 1.933M15.42 15L15 15.76M5.88 18.96a13.921 13.921 0 01-1.054-2.822M15 15.76l4.226-2.02M10.5 11v6m0 0l-3-3m3 3l3-3"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
.mask-edges {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); } /* Translates by 1/4 exactly because there are 4 identical blocks */
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 8s infinite alternate ease-in-out;
  will-change: transform;
}

@keyframes bg-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: bg-gradient 3s ease infinite;
  will-change: background-position;
}
</style>
