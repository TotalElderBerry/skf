<script setup>
</script>

<template>
  <section class="container max-w-7xl mx-auto px-6 py-24 relative z-10">
    
    <!-- FAQ Title -->
    <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> FAQ
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-white leading-tight">
        Frequently Asked Questions
      </h2>
    </div>

    <!-- FAQ Accordions (Static layout) -->
    <div class="max-w-3xl mx-auto space-y-4 mb-32">
      <!-- Q1 -->
      <div v-reveal="100" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
        <span class="text-white font-medium text-sm">What can this SK-powered app do for me?</span>
        <svg class="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <!-- Q2 -->
      <div v-reveal="200" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
        <span class="text-white font-medium text-sm">How does the platform improve SK project tracking?</span>
        <svg class="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <!-- Q3 -->
      <div v-reveal="300" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
        <span class="text-white font-medium text-sm">Can I use the app for budget and financial resolutions?</span>
        <svg class="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <!-- Q4 -->
      <div v-reveal="400" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
        <span class="text-white font-medium text-sm">Is my local municipality's data secure?</span>
        <svg class="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <!-- Q5 -->
      <div v-reveal="500" class="bg-[#110526]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
        <span class="text-white font-medium text-sm">How do I get my SK Federation enrolled?</span>
        <svg class="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>

    <!-- Final CTA Block -->
    <div v-reveal:scale class="relative w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-600/60 to-purple-600/60 backdrop-blur-3xl border border-white/20 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-[0_30px_60px_-15px_rgba(124,58,237,0.4)]">
      
      <!-- Abstract glowing orb internal -->
      <div class="absolute -top-32 -left-32 w-64 h-64 bg-white/20 blur-[80px] rounded-full"></div>
      
      <div class="relative z-10 w-full md:w-1/2 mb-10 md:mb-0">
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Smart Oversight for Your Everyday SK Needs
        </h2>
        <p class="text-purple-100/80 mb-8 max-w-md">
          A smart app for managing government youth projects, monitoring budgets, and empowering the future. Available on the App Store and Google Play.
        </p>
        <div class="flex gap-4">
          <button class="bg-black border border-white/10 text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-zinc-900 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25.96 5.8 6.44 5.56c1.55.05 2.58.98 3.51.98.96 0 2.22-.98 4.02-.92 1.34.05 2.53.51 3.32 1.48-2.92 1.96-2.4 5.6.51 6.84-.71 1.83-1.66 3.86-3.29 5.39-.12.11-.27.24-.46.4zM12.03 5.34c-.16-2.58 2.05-4.81 4.54-4.84.34 2.65-2.3 4.96-4.54 4.84z"></path></svg>
            <div class="text-left">
              <div class="text-[9px] text-zinc-400">Download on the</div>
              <div class="text-xs font-bold -mt-1">App Store</div>
            </div>
          </button>
          <button class="bg-black border border-white/10 text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-zinc-900 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm6.5-12.25l7 4.75-7 4.75v-9.5z"></path></svg>
            <div class="text-left">
              <div class="text-[9px] text-zinc-400">GET IT ON</div>
              <div class="text-xs font-bold -mt-1">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Phone Mockup Right side CTA -->
      <div class="relative z-10 w-full md:w-1/2 flex justify-end">
        <div class="w-64 h-[400px] bg-black border-[6px] border-zinc-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-end pb-8">
           <!-- Fake Dynamic Island -->
           <div class="absolute top-2 w-20 h-5 bg-zinc-900 rounded-full"></div>
           <!-- Screen Graphic -->
           <div class="text-center">
             <div class="text-yellow-400 font-bold text-5xl mb-2">%</div>
             <div class="text-white font-bold text-xl mb-1">SK Special Offer</div>
             <div class="text-zinc-400 text-xs px-6">Unlock federation connectivity today!</div>
             
             <!-- Fake options -->
             <div class="w-48 bg-purple-600/20 border border-purple-500 rounded-xl p-3 mx-auto mt-6">
                <div class="text-white text-xs font-semibold text-left">Advanced Plan</div>
                <div class="text-yellow-400 font-bold text-left mt-1">PHP 4,999<span class="text-[10px] text-zinc-400">/mo</span></div>
             </div>
           </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
