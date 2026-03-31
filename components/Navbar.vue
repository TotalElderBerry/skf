<script setup>
</script>

<template>
  <header class="container max-w-7xl mx-auto px-6 py-8 flex items-center justify-between z-50 relative">
    <div class="flex items-center gap-3 group cursor-pointer">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform"></div>
      <h2 class="font-display text-xl font-bold tracking-tight text-white">
        SKLoud <span class="text-indigo-400">For SKFeds</span>
      </h2>
    </div>
    
    <nav class="hidden md:flex items-center gap-10 text-[13px] font-semibold text-zinc-400">
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">About us</a>
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">Advantages</a>
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">Pricing</a>
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">FAQ</a>
    </nav>
    
    <div class="flex items-center gap-4">
      <button class="text-zinc-400 hover:text-white text-[13px] font-bold transition-colors">
        Login
      </button>
      <button class="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold transition-all shadow-lg hover:shadow-white/20 active:scale-95">
        Get Started
      </button>
    </div>
  </header>
</template>
