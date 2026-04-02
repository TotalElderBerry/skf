<script setup>
import { ref } from 'vue'

const activeItem = ref('Dashboard')

const navItems = [
  { name: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { name: 'Accounts', icon: 'mdi-account-group', to: '/accounts' },
  { name: 'Reports', icon: 'mdi-chart-line', to: '/reports' },
  { name: 'Elections', icon: 'mdi-account-check', to: '/elections' },
  { name: 'Settings', icon: 'mdi-tune', to: '/settings' }
]
</script>

<template>
  <aside class="fixed left-0 top-0 h-full w-64 z-50 bg-white border-r border-slate-200 flex flex-col py-8 px-4">
    
    <!-- Logo -->
    <div class="mb-12 px-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <span class="mdi mdi-shield-check text-white text-xl"></span>
        </div>
        <div>
          <h1 class="text-xl font-bold">SK Admin</h1>
          <p class="text-[10px] text-slate-400 uppercase font-bold">Digital Command</p>
        </div>
      </div>
    </div>

    <!-- Nav -->
    <nav class="flex-1 space-y-1">
      <NuxtLink 
        v-for="item in navItems" 
        :key="item.name"
        :to="item.to" 
        @click.prevent="activeItem = item.name"
        :class="[
          'flex items-center gap-4 px-4 py-3 rounded-xl transition',
          activeItem === item.name 
            ? 'text-indigo-600 bg-indigo-50 font-bold border-r-2 border-indigo-600' 
            : 'text-slate-500 hover:bg-slate-100'
        ]"
      >
        <span :class="['mdi', item.icon]"></span>
        {{ item.name }}
      </NuxtLink>
    </nav>

    <!-- Footer -->
    <div class="mt-auto px-4 pt-8 border-t">
      <button class="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold">
        New Account
      </button>
    </div>

  </aside>
</template>