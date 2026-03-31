<script setup>
import { onMounted, ref } from 'vue'

const isMounted = ref(false)
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

onMounted(() => {
  setTimeout(() => isMounted.value = true, 50)
})

const handleLogin = (e) => {
  e.preventDefault()
  console.log('Login attempt:', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  // Navigate to dashboard
  navigateTo('/dashboard')
}
</script>

<template>
  <div class="min-h-screen bg-[#070114] font-body text-zinc-200 relative overflow-hidden flex items-center justify-center selection:bg-purple-500/30 selection:text-white dark-theme">
    
    <!-- Neon Auras matching Landing Page style -->
    <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#EAB308]/10 blur-[120px] -z-10 animate-pulse" style="animation-duration: 6s;"></div>
    <div class="absolute top-[10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#B345FF]/15 blur-[120px] -z-10"></div>
    <div class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#8338EC]/10 blur-[150px] -z-10"></div>
    <!-- Mesh pattern overlay for subtle texture -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10 mix-blend-overlay"></div>

    <!-- Background Navigation Logo (Optional, consistent with branding) -->
    <div class="absolute top-8 left-8 flex items-center gap-3 group cursor-pointer" @click="$router.push('/')">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform"></div>
      <h2 class="font-display text-xl font-bold tracking-tight text-white hidden sm:block">
        SKLoud <span class="text-indigo-400">For SKFeds</span>
      </h2>
    </div>

    <!-- Main Glass Login Card -->
    <div 
      class="w-full max-w-md px-4 transition-all duration-1000 ease-out"
      :class="[isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
    >
      <div class="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <!-- Subtle Glow Streak on top of the card border -->
        <div class="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
          <p class="text-zinc-400 text-sm">Enter your credentials to access the portal</p>
        </div>

        <form @submit="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label for="email" class="text-sm font-semibold text-zinc-300 ml-1">Email Address</label>
            <div class="relative group">
              <input 
                id="email"
                v-model="email"
                type="email" 
                placeholder="name@skfed.gov" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all duration-300"
              />
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300"></div>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center ml-1">
              <label for="password" class="text-sm font-semibold text-zinc-300">Password</label>
              <a href="#" class="text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium">Forgot?</a>
            </div>
            <div class="relative group">
              <input 
                id="password"
                v-model="password"
                type="password" 
                placeholder="••••••••" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all duration-300"
              />
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300"></div>
            </div>
          </div>

          <div class="flex items-center gap-2 ml-1">
            <div class="relative flex items-center">
              <input 
                id="remember"
                v-model="rememberMe"
                type="checkbox" 
                class="w-4 h-4 rounded-md bg-white/5 border-white/10 text-purple-600 focus:ring-offset-0 focus:ring-purple-500/50 peer cursor-pointer"
              />
            </div>
            <label for="remember" class="text-xs text-zinc-400 cursor-pointer select-none">Remember this device for 30 days</label>
          </div>

          <button 
            type="submit"
            class="w-full bg-white text-black py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-[0.98] hover:shadow-white/10 hover:bg-zinc-100 relative group overflow-hidden"
          >
            <span class="relative z-10">Sign In to Dashboard</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>

      </div>
      
      <!-- Footer Copyright -->
      <footer class="mt-8 text-center opacity-30 text-[10px] uppercase tracking-widest font-semibold">
        <p>Sangguniang Kabataan Federation &copy; 2026</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for page animations or custom overrides if needed */
input::placeholder {
  font-size: 0.9rem;
}
</style>
