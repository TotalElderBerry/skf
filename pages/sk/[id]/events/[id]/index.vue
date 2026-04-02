<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

// Mock data
const allParticipants = ref([
  { id: 1, name: 'Jordan Daniels', email: 'jordan@gallery.com', role: 'Youth Delegate', status: 'Confirmed', date: 'Sep 12, 2024', initials: 'JD', color: 'bg-indigo-100 text-indigo-600' },
  { id: 2, name: 'Sarah Miller', email: 'sarah.m@vanguard.edu', role: 'Student Representative', status: 'Confirmed', date: 'Sep 14, 2024', initials: 'SM', color: 'bg-emerald-100 text-emerald-600' },
  { id: 3, name: 'Alex Kumar', email: 'alex.k@innovation.org', role: 'Policy Advocate', status: 'Pending', date: 'Sep 15, 2024', initials: 'AK', color: 'bg-amber-100 text-amber-600' }
])

const activeTab = ref('Registered')
const tabs = ['Registered', 'Attended', 'Absents']

// Stat Data following your design pattern
const stats = ref([
  { label: 'Registered', value: '1,240', icon: 'mdi-account-group', color: 'text-indigo-700', iconColor: 'text-indigo-100', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-100' },
  { label: 'Attended', value: '856', icon: 'mdi-trending-up', color: 'text-emerald-600', iconColor: 'text-emerald-50', bgColor: 'bg-white', borderColor: 'border-slate-200' },
  { label: 'Absent', value: '384', icon: 'mdi-account-off', color: 'text-slate-900', iconColor: 'text-slate-50', bgColor: 'bg-white', borderColor: 'border-slate-200' }
])
</script>

<template>
  <div class="space-y-12 pb-20">
    
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-8 h-[450px] rounded-3xl overflow-hidden shadow-sm border border-slate-200 relative group">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" 
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8 w-full">
          <p class="text-indigo-300 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Leadership Development</p>
          <h1 class="text-4xl font-black mb-4 font-headline text-white leading-tight max-w-2xl">
            Global Youth <br/> Leadership Summit 2024
          </h1>
          <div class="flex gap-6 text-slate-300 text-sm font-bold">
            <span class="flex items-center gap-2"><span class="mdi mdi-calendar text-indigo-400"></span>Oct 24, 2024</span>
            <span class="flex items-center gap-2"><span class="mdi mdi-map-marker text-indigo-400"></span>Grand Hall</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 bg-white rounded-3xl p-10 shadow-sm border border-slate-200 flex flex-col">
        <div class="space-y-6">
          <p class="text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em]">Event Evaluation</p>
          <h2 class="text-3xl font-headline font-black leading-tight text-slate-900">Post-Event Analytics</h2>
          <p class="text-slate-500 text-sm leading-relaxed opacity-70">
            Analyzing the impact and participation metrics for the annual youth delegation.
          </p>
        </div>

        <div class="mt-auto pt-8">
          <BaseButton variant="primary" class="w-full py-4 shadow-md">
            View Analytics
          </BaseButton>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(stat, index) in stats" :key="index" 
        :class="[stat.bgColor, stat.borderColor, 'p-8 rounded-3xl border relative overflow-hidden group transition-all hover:shadow-md']">
        
        <span :class="['mdi absolute -right-4 -bottom-4 text-8xl transition-transform group-hover:scale-110', stat.icon, stat.iconColor]"></span>
        
        <p :class="[stat.color, 'opacity-50 text-[10px] font-black uppercase tracking-widest mb-1 relative']">
          {{ stat.label }}
        </p>
        <h4 :class="[stat.color, 'text-4xl font-black relative']">
          {{ stat.value }}
        </h4>
      </div>
    </section>

    <section class="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
      <div class="flex border-b border-slate-100 px-10 pt-6 bg-slate-50/30">
        <button 
          v-for="tab in tabs" :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-8 py-5 border-b-2 font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300',
            activeTab === tab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div class="p-10">
        <div class="flex justify-between items-center mb-10">
          <h4 class="text-xl font-headline font-black text-slate-900 tracking-tighter">Attendee Directory</h4>
          <div class="relative group">
            <span class="mdi mdi-magnify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></span>
            <input 
              type="text" 
              placeholder="Search..." 
              class="pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/10 w-64 transition-all outline-none"
            />
          </div>
        </div>

        <BaseTable :headers="['Participant', 'Role', 'Status', 'Reg. Date', '']" :totalCount="allParticipants.length">
          <template #rows>
            <tr v-for="p in allParticipants" :key="p.id" class="hover:bg-slate-50/50 transition-colors group">
              <td class="px-8 py-6">
                <div class="flex items-center gap-4">
                  <div :class="[p.color, 'w-10 h-10 rounded-xl flex items-center justify-center font-black text-[10px] shadow-sm']">
                    {{ p.initials }}
                  </div>
                  <div class="flex flex-col">
                    <span class="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{{ p.name }}</span>
                    <span class="text-[10px] text-slate-400 font-medium italic opacity-60">{{ p.email }}</span>
                  </div>
                </div>
              </td>
              <td class="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{{ p.role }}</td>
              <td class="px-8 py-6">
                <BaseBadge :variant="p.status === 'Confirmed' ? 'primary' : 'warning'" dot>{{ p.status }}</BaseBadge>
              </td>
              <td class="px-8 py-6 text-xs font-bold text-slate-500">{{ p.date }}</td>
              <td class="px-8 py-6 text-right">
                <button class="mdi mdi-dots-vertical text-slate-300 hover:text-indigo-600 text-xl"></button>
              </td>
            </tr>
          </template>
        </BaseTable>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css');
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
</style>