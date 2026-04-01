<script setup>
import { ref } from 'vue'
import BaseTable from '../../../components/base/BaseTable.vue'

definePageMeta({
  layout: 'admin'
})

// Main Constituents Data
const constituents = ref([
  { id: 1, name: 'Isabella Santos', email: 'isabella.s@gmail.com', date: 'Oct 12, 2023', status: 'Active', statusColor: 'bg-emerald-500', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 2, name: 'Mateo Dela Cruz', email: 'm.delacruz@outlook.com', date: 'Nov 05, 2023', status: 'Active', statusColor: 'bg-emerald-500', avatar: 'https://i.pravatar.cc/150?u=6' },
  { id: 3, name: 'Rafael Mendoza', email: 'raf.mendoza@edu.ph', date: 'Jan 18, 2024', status: 'Inactive', statusColor: 'bg-slate-300', avatar: 'https://i.pravatar.cc/150?u=7' },
  { id: 4, name: 'Sofia Villareal', email: 'sofi.v@icloud.com', date: 'Feb 22, 2024', status: 'Active', statusColor: 'bg-emerald-500', avatar: 'https://i.pravatar.cc/150?u=8' }
])

// Sidebar Stats (Matching "Engagement Overview" style)
const constituentStats = ref({
  total: 150,
  growth: '+12%',
  activeToday: 84
})

// Quick Actions / Recent Activity (Matching "Upcoming" sidebar style)
const recentRegistrations = ref([
  { month: 'OCT', day: '28', name: 'Lucas Reyes', type: 'New Resident' },
  { month: 'OCT', day: '27', name: 'Elena Guanzon', type: 'Student' },
  { month: 'OCT', day: '25', name: 'Juan Ramos', type: 'Voter' }
])
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">
    <div class="space-y-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <section class="lg:col-span-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 class="text-2xl font-black text-slate-900 font-headline">Constituent Directory</h2>
            <div class="flex gap-3 w-full md:w-auto">
              <div class="relative flex-grow">
                <span class="mdi mdi-magnify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                <input class="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64 transition-all" placeholder="Search members..." type="text"/>
              </div>
              <button class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <span class="mdi mdi-filter-variant"></span>
              </button>
            </div>
          </div>

          <div class="">
                <BaseTable 
                    :headers="['Resident', 'Join Date', 'Status']" 
                    :totalCount="constituents.length"
                >
                    <template #rows>
                        <tr v-for="person in constituents" :key="person.id" class="hover:bg-slate-50/50 transition-colors group">
                            <td class="px-8 py-5">
                            <div class="flex items-center gap-4">
                                <img :src="person.avatar" class="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                <div class="flex flex-col">
                                <span class="font-bold text-slate-900 text-sm">{{ person.name }}</span>
                                <span class="text-[10px] text-slate-400 font-medium tracking-tight">{{ person.email }}</span>
                                </div>
                            </div>
                            </td>

                            <td class="px-8 py-5">
                            <span class="text-sm font-bold text-slate-600">{{ person.date }}</span>
                            </td>

                            <td class="px-8 py-5">
                            <div class="flex items-center gap-2">
                                <div :class="['w-2 h-2 rounded-full', person.statusColor]"></div>
                                <span class="text-xs font-bold text-slate-600">{{ person.status }}</span>
                            </div>
                            </td>

                            <td class="px-8 py-5 text-right">
                            <button class="text-indigo-600 text-xs font-black hover:underline tracking-widest uppercase">
                                Manage
                            </button>
                            </td>
                        </tr>
                    </template>
                </BaseTable>
          </div>
        </section>

        <section class="lg:col-span-4 space-y-10">
          <div>
            <h2 class="text-2xl font-black text-slate-900 font-headline mb-6">Overview</h2>
            <div class="space-y-4">
              <div class="p-6 bg-indigo-600 rounded-3xl text-white relative overflow-hidden group shadow-lg shadow-indigo-200">
                <span class="mdi mdi-account-group absolute -right-4 -bottom-4 text-7xl text-white/10 group-hover:scale-110 transition-transform"></span>
                <p class="text-indigo-100 text-[10px] font-black uppercase tracking-widest mb-1">Total Population</p>
                <h4 class="text-4xl font-black">{{ constituentStats.total }}</h4>
                <p class="text-indigo-200 text-[10px] font-bold mt-2 italic">{{ constituentStats.growth }} from last month</p>
              </div>

              <div class="p-6 bg-white rounded-3xl border border-slate-200 relative overflow-hidden group">
                <span class="mdi mdi-lightning-bolt absolute -right-4 -bottom-4 text-7xl text-slate-50 group-hover:scale-110 transition-transform"></span>
                <p class="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Active Today</p>
                <h4 class="text-3xl font-black text-slate-900">{{ constituentStats.activeToday }}</h4>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<style scoped>
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
</style>