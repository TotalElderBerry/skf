<script setup>
// Navigation logic if needed
</script>

<template>
  <header class="container max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 flex items-center justify-between z-50 relative">
    <div class="flex items-center gap-2 md:gap-3 group cursor-pointer">
      <div class="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform"></div>
      <NuxtLink to="/" class="font-display text-lg md:text-xl font-bold tracking-tight text-white">
        SKLoud <span class="text-indigo-400">For SKFeds</span>
      </NuxtLink>
    </div>
    
    <nav class="hidden md:flex items-center gap-10 text-[13px] font-semibold text-zinc-400">
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">About us</a>
      <NuxtLink to="/advantages" class="hover:text-white transition-all hover:translate-y-[-1px]">Advantages</NuxtLink>
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">Pricing</a>
      <a href="#" class="hover:text-white transition-all hover:translate-y-[-1px]">FAQ</a>
    </nav>
    
    <div class="flex items-center gap-3 md:gap-4">
      <NuxtLink to="/login" class="text-zinc-400 hover:text-white text-[12px] md:text-[13px] font-bold transition-colors">
        Login
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.font-display { font-family: 'Manrope', sans-serif; }
</style>
