<script setup>
import { ref } from 'vue'
import BaseTable from '../components/base/BaseTable.vue'
definePageMeta({
  layout: 'admin'
})

const federations = [
  { region: 'NCR', name: 'Quezon City Federation', authority: 'District 1-6 Authority', president: 'Maria Clara', initials: 'MC', status: 'Active' },
  { region: 'Region VII', name: 'Cebu City Federation', authority: 'Visayas Central Hub', president: 'Jose Rizal', initials: 'JR', status: 'Active' },
  { region: 'Region XI', name: 'Davao City Federation', authority: 'Mindanao South Operations', president: 'Andres Bonifacio', initials: 'AB', status: 'Pending' }
]

const headers = [
  'Region',
  'Federation Name',
  'President',
  'Status'
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">

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
        <BaseButton 
          to="/create-sk" 
          size="md" 
          variant="primary"
        >
          New Account
        </BaseButton>
      </section>

      <!-- Summary Stats Bento Grid -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Stat Card 1 -->
        <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute -right-4 -bottom-4 text-slate-100 group-hover:scale-110 transition-transform duration-500">
            <span class="mdi mdi-account-group text-8xl"></span>
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
            <span class="mdi mdi-account text-8xl"></span>
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
            <span class="mdi mdi-check-circle text-8xl"></span>
          </div>
          <p class="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-4">Active Federations</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-4xl font-headline font-bold text-slate-900">1,120</h3>
            <span class="text-xs font-bold text-slate-400 font-body">90% of total</span>
          </div>
        </div>
      </section>

      <!-- Data Table Section -->
      <section class="shadow-sm overflow-hidden mb-12">
        <div class="px-8 py-2 flex justify-between items-center">
          <h4 class="font-headline font-bold text-lg text-slate-900">SK Councils Directory</h4>
          <div class="flex gap-2">
            <button class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
              <span class="mdi mdi-filter-variant text-xl"></span>
            </button>
            <button class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
              <span class="mdi mdi-download text-xl"></span>
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
           <BaseTable
            :headers="headers"
            :totalCount="federations.length"
          >
            <template #rows>
              <tr
                v-for="fed in federations"
                :key="fed.name"
                class="group hover:bg-indigo-50/30 transition-colors cursor-default"
              >
                <!-- Region -->
                <td class="px-8 py-6">
                  <span class="bg-indigo-100/50 px-3 py-1 rounded-full text-[11px] font-bold text-indigo-600 whitespace-nowrap">
                    {{ fed.region }}
                  </span>
                </td>

                <!-- Federation Name -->
                <td class="px-8 py-6">
                  <p class="text-sm font-bold text-slate-900">
                    {{ fed.name }}
                  </p>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">
                    {{ fed.authority }}
                  </p>
                </td>

                <!-- President -->
                <td class="px-8 py-6">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-600 border border-slate-200">
                      {{ fed.initials }}
                    </div>
                    <span class="text-sm text-slate-700 font-bold">
                      {{ fed.president }}
                    </span>
                  </div>
                </td>

                <!-- Status -->
                <td class="px-8 py-6">
                  <div class="flex items-center gap-2">
                    <span
                      :class="[
                        'w-2 h-2 rounded-full',
                        fed.status === 'Active'
                          ? 'bg-emerald-500 animate-pulse'
                          : 'bg-amber-500 shadow-glow'
                      ]"
                    ></span>

                    <span
                      :class="[
                        'text-xs font-bold',
                        fed.status === 'Active'
                          ? 'text-emerald-600'
                          : 'text-amber-600'
                      ]"
                    >
                      {{ fed.status }}
                    </span>
                  </div>
                </td>

                <!-- Actions -->
                <td class="px-8 py-6 text-right">
                  <div class="flex justify-end gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    
                    <!-- FIXED LINK -->
                    <NuxtLink
                      :to="`/sk/${fed.id || fed.name}/events`"
                      class="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all"
                    >
                      View
                    </NuxtLink>

                    <button class="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">
                      Edit
                    </button>

                  </div>
                </td>

              </tr>
            </template>
          </BaseTable>
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

.mdi {
  display: inline-block;
  line-height: 1;
}

/* Ensure no background leakage from landing page */
html, body {
  background-color: #F8FAFC !important;
}
</style>
