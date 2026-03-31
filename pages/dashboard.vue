<script setup>
import { ref } from 'vue'

const activeItem = ref('Accounts')
const navItems = [
  { name: 'Dashboard', icon: 'dashboard' },
  { name: 'Accounts', icon: 'group' },
  { name: 'Reports', icon: 'analytics' },
  { name: 'Elections', icon: 'how_to_reg' },
  { name: 'Settings', icon: 'tune' }
]

const federations = [
  { region: 'NCR', name: 'Quezon City Federation', authority: 'District 1-6 Authority', president: 'Maria Clara', initials: 'MC', status: 'Active' },
  { region: 'Region VII', name: 'Cebu City Federation', authority: 'Visayas Central Hub', president: 'Jose Rizal', initials: 'JR', status: 'Active' },
  { region: 'Region XI', name: 'Davao City Federation', authority: 'Mindanao South Operations', president: 'Andres Bonifacio', initials: 'AB', status: 'Pending' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">
    
    <!-- SideNavBar (Authenticated / Light Mode) -->
    <aside class="fixed left-0 top-0 h-full w-64 z-50 bg-white border-r border-slate-200 flex flex-col py-8 px-4 font-manrope text-sm font-medium">
      <div class="mb-12 px-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span class="material-symbols-outlined text-white font-bold" style="font-variation-settings: 'FILL' 1;">security</span>
          </div>
          <div>
            <h1 class="text-xl font-bold text-slate-900 tracking-tighter">SK Admin</h1>
            <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Digital Command</p>
          </div>
        </div>
      </div>
      
      <nav class="flex-1 space-y-1">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          href="#" 
          @click.prevent="activeItem = item.name"
          :class="[
            'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200',
            activeItem === item.name 
              ? 'text-indigo-600 bg-indigo-50 font-bold border-r-2 border-indigo-600' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          ]"
        >
          <span class="material-symbols-outlined" :style="activeItem === item.name ? 'font-variation-settings: \'FILL\' 1;' : ''">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </a>
      </nav>

      <div class="mt-auto px-4 pt-8 border-t border-slate-100">
        <button class="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-indigo-500/20 hover:bg-indigo-700">
          New Account
        </button>
      </div>
    </aside>

    <!-- TopNavBar (Authenticated / Light Mode) -->
    <header class="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl h-20 ml-64 flex justify-between items-center px-8 border-b border-slate-200">
      <div class="relative w-96">
        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
        <input 
          class="w-full bg-slate-100 border-none rounded-full py-2.5 pl-12 pr-6 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/50 placeholder:text-slate-400 transition-all font-medium" 
          placeholder="Search federations or officials..." 
          type="text"
        />
      </div>
      <div class="flex items-center gap-6">
        <button class="text-slate-400 hover:text-indigo-600 transition-colors active:scale-95">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button class="text-slate-400 hover:text-indigo-600 transition-colors active:scale-95">
          <span class="material-symbols-outlined">settings</span>
        </button>
        <div class="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <div class="flex items-center gap-3 pl-2">
          <div class="text-right hidden sm:block">
            <p class="text-xs font-bold text-slate-900 leading-none">SK Admin</p>
            <p class="text-[10px] text-indigo-600 font-bold mt-1">Super Administrator</p>
          </div>
          <div class="w-10 h-10 rounded-full border-2 border-indigo-100 p-0.5 overflow-hidden">
            <img class="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLK2UkJOKqLkjOU94dzy16qSs1Dj6TQvshEegUCs_-tDy8aGqjUNJnLOuY0Hv6xMgK0wpuTeHntjy5AKsqB97nuZZKXNn-rkpQTdNkgrWDiT3D4gH4KWCXrDBg0dhlL-xCMMlg_el7nI_hW0WyoCgTw1s1IuKdD_ilSv-givnwdB2xVaKkoGqPVFUrx5eV31YQ8WJ87G6K9SCL9kBpVe2qpTHTtSkEYH0wBK2BrplH_COBsuZAh0ZweCz0OQD6PwdP6-QRbJT6zDI5"/>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content (Authenticated / Light Mode) -->
    <main class="ml-64 p-8 lg:p-12 min-h-screen">
      
      <!-- Hero Header Section -->
      <section class="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 class="text-4xl font-headline font-black tracking-tighter text-slate-900 mb-2">SK Accounts</h2>
          <p class="text-slate-500 max-w-lg leading-relaxed font-medium">
            Manage and monitor Sangguniang Kabataan federations nationwide. Oversee regional status, presidential appointments, and system compliance.
          </p>
        </div>
        <button class="px-8 py-3 bg-indigo-600 text-white rounded-full font-headline font-extrabold tracking-tight active:scale-95 transition-all shadow-xl shadow-indigo-600/20 hover:bg-indigo-700">
          New Account
        </button>
      </section>

      <!-- Summary Stats Bento Grid -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Stat Card 1 -->
        <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute -right-4 -bottom-4 text-slate-100 group-hover:scale-110 transition-transform duration-500">
            <span class="material-symbols-outlined text-8xl" style="font-variation-settings: 'wght' 700;">group</span>
          </div>
          <p class="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">Total SK Accounts</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-4xl font-headline font-bold text-slate-900">1,248</h3>
            <span class="text-emerald-600 text-xs font-bold font-body">+12% this month</span>
          </div>
        </div>
        <!-- Stat Card 2 -->
        <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute -right-4 -bottom-4 text-slate-100 group-hover:scale-110 transition-transform duration-500">
            <span class="material-symbols-outlined text-8xl" style="font-variation-settings: 'wght' 700;">person</span>
          </div>
          <p class="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Total Users</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-4xl font-headline font-bold text-slate-900">15,640</h3>
            <span class="text-slate-400 text-xs font-bold font-body">+8% growth</span>
          </div>
        </div>
        <!-- Stat Card 3 -->
        <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute -right-4 -bottom-4 text-slate-100 group-hover:scale-110 transition-transform duration-500">
            <span class="material-symbols-outlined text-8xl" style="font-variation-settings: 'wght' 700;">check_circle</span>
          </div>
          <p class="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-4">Active Federations</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-4xl font-headline font-bold text-slate-900">1,120</h3>
            <span class="text-xs font-bold text-slate-400 font-body">90% of total</span>
          </div>
        </div>
      </section>

      <!-- Data Table Section -->
      <section class="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-12">
        <div class="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <h4 class="font-headline font-bold text-lg text-slate-900">SK Federations Directory</h4>
          <div class="flex gap-2">
            <button class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
              <span class="material-symbols-outlined text-xl">filter_list</span>
            </button>
            <button class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
              <span class="material-symbols-outlined text-xl">download</span>
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50/50">
                <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Region</th>
                <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Federation Name</th>
                <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">President</th>
                <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                <th class="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-for="fed in federations" :key="fed.name" class="group hover:bg-indigo-50/30 transition-colors cursor-default">
                <td class="px-8 py-6">
                  <span class="bg-indigo-100/50 px-3 py-1 rounded-full text-[11px] font-bold text-indigo-600 whitespace-nowrap">{{ fed.region }}</span>
                </td>
                <td class="px-8 py-6">
                  <p class="text-sm font-bold text-slate-900">{{ fed.name }}</p>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">{{ fed.authority }}</p>
                </td>
                <td class="px-8 py-6">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-600 border border-slate-200">{{ fed.initials }}</div>
                    <span class="text-sm text-slate-700 font-bold">{{ fed.president }}</span>
                  </div>
                </td>
                <td class="px-8 py-6">
                  <div class="flex items-center gap-2">
                    <span :class="['w-2 h-2 rounded-full', fed.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500 shadow-glow']"></span>
                    <span :class="['text-xs font-bold', fed.status === 'Active' ? 'text-emerald-600' : 'text-amber-600']">{{ fed.status }}</span>
                  </div>
                </td>
                <td class="px-8 py-6 text-right">
                  <div class="flex justify-end gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">View</button>
                    <button class="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">Edit</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table Footer -->
        <div class="px-8 py-5 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
          <p class="text-xs text-slate-400 font-bold">Showing 3 of 1,248 federations</p>
          <div class="flex items-center gap-4">
            <button class="text-xs font-bold text-indigo-600 disabled:opacity-20" disabled>Previous</button>
            <div class="flex gap-1">
              <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-500/20">1</span>
              <span class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-xs font-bold text-slate-500 cursor-pointer">2</span>
              <span class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-xs font-bold text-slate-500 cursor-pointer">3</span>
            </div>
            <button class="text-xs font-bold text-indigo-600">Next</button>
          </div>
        </div>
      </section>

    </main>

    <!-- Floating System Status -->
    <div class="fixed bottom-8 right-8 flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-2xl backdrop-blur-md z-50">
      <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
      <p class="text-xs font-bold tracking-tight text-slate-600 uppercase">System Status: Optimal</p>
    </div>

  </div>
</template>

<style>
/* Dashboard-specific light-mode font overrides and settings */


.font-headline { font-family: 'Manrope', sans-serif; }

.shadow-glow {
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Ensure no background leakage from landing page */
html, body {
  background-color: #F8FAFC !important;
}
</style>
