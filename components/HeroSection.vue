<script setup>
const headline = "Empowering Local SK Federations"
const words = headline.split(' ')

// Helper to calculate delay so words appear one by one
const getDelay = (index) => `${index * 0.15}s`
</script>


<template>
  <main class="container max-w-7xl mx-auto px-6 pt-12 pb-32 z-10 relative flex flex-col items-center text-center">
    
    <!-- Hero Headline & Subtext -->
    <div v-reveal class="max-w-4xl mb-12">
      <h1 class="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 overflow-hidden">
        <span 
          v-for="(word, index) in words" 
          :key="index"
          class="inline-block animate-blur-in opacity-0"
          :style="{ animationDelay: getDelay(index) }"
        >
          <span v-if="word === 'SK' || word === 'Federations'" 
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 mr-3">
            {{ word }}
          </span>
          <span v-else class="mr-3">{{ word }}</span>
        </span>
      </h1>
      <p class="font-body text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
        Smart solutions to simplify your council purchases, reporting, and youth development planning across the Philippines.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-base transition-all hover:pr-10 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 w-full sm:w-auto">
          Try now
          <span class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">↗</span>
        </button>
        <button class="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-base transition-all hover:bg-white/10 active:scale-95 w-full sm:w-auto">
          View Demo
        </button>
      </div>
    </div>

    <!-- Centered Standout Map with Floating Cards -->
    <div v-reveal="200" class="relative w-full max-w-[900px] mt-12 group">
      
      <!-- Massive Backglows (NeoAI Reference) -->
      <div class="absolute -inset-20 bg-purple-600/15 blur-[120px] rounded-full animate-pulse -z-10"></div>
      <div class="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full -z-10" style="animation-delay: 2s;"></div>
      
      <!-- Large Premium Map Container -->
      <div class="relative glass-card rounded-[3rem] p-4 sm:p-8 lg:p-12 overflow-hidden border border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.8)] z-10 transition-transform duration-700 group-hover:scale-[1.01]">
        <!-- Subtle inner top highlight -->
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        
        <div class="relative overflow-hidden rounded-[2rem] bg-[#0A051A]/40 border border-white/5 p-2 sm:p-6 shadow-inner">
           <PhilippinesMap />
        </div>
      </div>

      <!-- Floating Glass Cards (NeoAI Reference) -->
      
      <!-- 1. Profile Card (Top Right) -->
      <FloatingCard 
        delay="400" 
        position-classes="-top-12 sm:-top-6 -right-2 sm:-top-12 sm:-right-12 md:-right-20 w-48 sm:w-56"
        scale-mobile="150"
        origin="right"
      >
        <div class="flex items-center gap-3 mb-3">
           <div class="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">SK</div>
           <div class="text-left">
              <p class="text-[11px] font-bold text-white leading-none">Council Profile</p>
              <p class="text-[9px] text-zinc-400 mt-1">Complete your details</p>
           </div>
        </div>
        <div class="space-y-1.5">
           <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div class="h-full w-2/3 bg-purple-500 transition-all duration-1000"></div>
           </div>
           <p class="text-[8px] text-zinc-500 text-right font-semibold uppercase tracking-wider">66% Complete</p>
        </div>
      </FloatingCard>

      <!-- 2. Request Card (Bottom Left) -->
      <FloatingCard 
        delay="600" 
        position-classes="-bottom-14 sm:-bottom-12 -left-2 sm:-bottom-16 sm:-left-12 md:-left-24 w-56 sm:w-64"
        float-delay="-3s"
        scale-mobile="0.65"
        origin="left"
      >
         <div class="flex flex-col gap-3 text-left">
            <div class="flex items-center gap-2">
               <div class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
               <p class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest leading-none">Active Requests</p>
            </div>
            <p class="text-xs text-white font-medium leading-relaxed">How can we help with your resolution mapping today?</p>
            <div class="flex gap-2">
               <div class="px-2 py-1 bg-white/5 rounded-lg text-[9px] border border-white/10 text-zinc-300 font-semibold transition-colors hover:bg-white/10 cursor-pointer">Budget Report</div>
               <div class="px-2 py-1 bg-white/5 rounded-lg text-[9px] border border-white/10 text-zinc-300 font-semibold transition-colors hover:bg-white/10 cursor-pointer">Project Stats</div>
            </div>
         </div>
      </FloatingCard>

      <!-- 3. Pricing Badge (Floating Top Left) -->
      <FloatingCard 
        delay="800" 
        position-classes="top-4 -left-1 sm:top-20 sm:-left-8 md:-left-16 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
        float-duration="7s"
        scale-mobile="0.75"
        origin="left"
        class="border-yellow-500/30 shadow-xl"
      >
         <div class="flex items-center gap-2 whitespace-nowrap">
           <span class="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span>
           <span class="text-[9px] sm:text-[10px] font-bold text-yellow-400 uppercase tracking-widest">BEST FEDERATION PLATFORM</span>
         </div>
      </FloatingCard>

    </div>
  </main>
</template>

<style scoped>
/* Mobile adjustments for the floating components because transform: scale is tricky in templates */
@media (max-width: 640px) {
  :deep(.glass-card) {
    transform: scale(var(--mobile-scale, 0.95)) !important;
  }
}

@keyframes blurIn {
  0% {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
}

.animate-blur-in {
  animation: blurIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* Optional: Add a subtle text-shadow to make it pop like the video */
h1 span {
  text-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
</style>
