<script setup>
</script>

<template>
  <section class="container max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
    
    <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
        Platform Tiering
      </h2>
      <p class="text-purple-200/60 font-medium">Explore our scalable management plans designed to enhance your local government operations.</p>
    </div>

    <!-- 3 Pricing Cards -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
      
      <!-- Tier 1 -->
      <div v-reveal="100" class="w-full lg:w-1/3 bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform">
        <h4 class="text-white font-semibold mb-2 text-lg">"Barangay" Tier</h4>
        <div class="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">PHP 0<span class="text-sm font-medium text-purple-200/50">/mo</span></div>
        <ul class="space-y-4 mb-8 text-sm text-purple-200/80">
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Basic SK council profiles</li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Local project planning tools</li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Limited chat support</li>
        </ul>
        <button class="w-full py-3 rounded-full border border-purple-500/30 text-white font-semibold text-sm hover:bg-white/5 transition-colors">Start for free</button>
      </div>

      <!-- Tier 2 (Highlighted) -->
      <div v-reveal="250" class="w-full lg:w-1/3 bg-gradient-to-br from-purple-600/30 to-indigo-900/30 backdrop-blur-xl border border-purple-500/40 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(168,85,247,0.2)] transform lg:scale-105 z-10">
        <h4 class="text-white font-semibold mb-2 text-lg">"Municipal" Tier</h4>
        <div class="text-5xl font-bold text-white mb-8 border-b border-white/10 pb-6">PHP 4,999<span class="text-sm font-medium text-purple-200/50">/mo</span></div>
        <ul class="space-y-4 mb-8 text-sm text-purple-100">
          <li class="flex items-start gap-3"><svg class="w-4 h-4 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Complete tracking of all Barangay SKs</li>
          <li class="flex items-start gap-3"><svg class="w-4 h-4 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Automated budgeting compliance</li>
          <li class="flex items-start gap-3"><svg class="w-4 h-4 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Priority deployment support</li>
          <li class="flex items-start gap-3"><svg class="w-4 h-4 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Real-time order and resolutions tracking</li>
        </ul>
        <button class="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg">Upgrade to Municipal</button>
      </div>

      <!-- Tier 3 -->
      <div v-reveal="400" class="w-full lg:w-1/3 bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform">
        <h4 class="text-white font-semibold mb-2 text-lg">"Provincial" Tier</h4>
        <div class="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">Custom<span class="text-sm font-medium text-purple-200/50"></span></div>
        <ul class="space-y-4 mb-8 text-sm text-purple-200/80">
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Everything in Municipal</li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Exclusive access to Federation analytics</li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> VIP 24/7 technical responses</li>
        </ul>
        <button class="w-full py-3 rounded-full border border-purple-500/30 text-white font-semibold text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
      </div>

    </div>
  </section>
</template>
