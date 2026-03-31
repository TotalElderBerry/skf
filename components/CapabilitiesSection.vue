<script setup>
</script>

<template>
  <section class="container max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
    
    <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Capabilities
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-white leading-tight">
        Revolutionary Power & <br />
        <span class="text-yellow-400">Capabilities of SKLoud</span>
      </h2>
    </div>

    <!-- 2x2 Grid using Flex/Grid -->
    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      
      <!-- Capability 1 -->
      <div v-reveal="100" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-[#180A36] transition-colors">
        <div class="w-12 h-12 shrink-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-2">Automated Council Rollups</h4>
          <p class="text-sm text-purple-200/50 leading-relaxed">Handles financial records, youth profiles, and project statuses in real-time, saving you hours of manual federation consolidation.</p>
        </div>
      </div>

      <!-- Capability 2 -->
      <div v-reveal="200" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-[#180A36] transition-colors">
        <div class="w-12 h-12 shrink-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-2">Effortless Collaboration</h4>
          <p class="text-sm text-purple-200/50 leading-relaxed">Instantly reach all SK Chairpersons with cascading announcements. Manage everything seamlessly using centralized comms.</p>
        </div>
      </div>

      <!-- Capability 3 -->
      <div v-reveal="300" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-[#180A36] transition-colors">
        <div class="w-12 h-12 shrink-0 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-2">Smart Resource Center</h4>
          <p class="text-sm text-purple-200/50 leading-relaxed">Understands local governance needs and adapts document templates, resolutions, and budget guidelines for your councils.</p>
        </div>
      </div>

      <!-- Capability 4 -->
      <div v-reveal="400" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:bg-[#180A36] transition-colors">
        <div class="w-12 h-12 shrink-0 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
          <svg class="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-2">Reliable & Secure</h4>
          <p class="text-sm text-purple-200/50 leading-relaxed">Ensures strict data protection of youth profiling records and maintains 99.9% uptime for uninterrupted government service.</p>
        </div>
      </div>

    </div>
  </section>
</template>
