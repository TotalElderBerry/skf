<script setup>
import { ref } from 'vue'
import BaseTable from '../../../components/base/BaseTable.vue'

definePageMeta({
  layout: 'admin'
})

// Highlighted Event Data
const nextEvent = ref({
  title: 'Youth Leadership Summit 2024: Digital Frontiers',
  category: 'Leadership Development',
  date: 'Oct 24, 2024',
  location: 'Community Grand Hall',
  startingIn: '5 days',
  image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200',
  attendees: [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3'
  ],
  extraAttendeesCount: 82
})

// Upcoming Events List (Sidebar)
const upcomingEvents = ref([
  { month: 'NOV', day: '02', title: 'Coastal Preservation Drive', location: 'Manila Bay Waterfront' },
  { month: 'NOV', day: '15', title: 'Digital Literacy Workshop', location: 'District Tech Center' },
  { month: 'DEC', day: '05', title: 'Sports & Wellness Festival', location: 'San Lorenzo Sports Complex' }
])

// Full Event List Data (Table)
const allEvents = ref([
  { id: 1, name: 'Youth Leadership Summit 2024', location: 'Community Grand Hall', date: 'Oct 24, 2024', category: 'Governance', status: 'Upcoming', statusColor: 'bg-amber-500' },
  { id: 2, name: 'Coastal Preservation Drive', location: 'Manila Bay Waterfront', date: 'Nov 02, 2024', category: 'Environment', status: 'Upcoming', statusColor: 'bg-amber-500' },
  { id: 3, name: 'Digital Literacy Workshop', location: 'District Tech Center', date: 'Nov 15, 2024', category: 'Education', status: 'Upcoming', statusColor: 'bg-amber-500' },
  { id: 4, name: 'Mental Health Awareness Week', location: 'Online & Local Clinics', date: 'Oct 10-17, 2024', category: 'Health', status: 'Ongoing', statusColor: 'bg-emerald-500' },
  { id: 5, name: 'Barangay Clean-up Day', location: 'District Wide', date: 'Sept 20, 2024', category: 'Environment', status: 'Completed', statusColor: 'bg-slate-300' }
])

const engagementStats = ref({
  attendanceTrend: '+12%',
  totalVolunteers: 412,
  citizenFeedback: '94%'
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">
      <div class="space-y-16">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <section class="lg:col-span-8">
            <h2 class="text-2xl font-black text-slate-900 font-headline mb-6">Next Event</h2>
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-[450px]">
              <div class="relative flex-grow overflow-hidden group">
                <img :src="nextEvent.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-8 w-full">
                  <p class="text-indigo-300 font-black text-[10px] uppercase tracking-[0.2em] mb-2">{{ nextEvent.category }}</p>
                  <h3 class="text-4xl font-black mb-4 font-headline text-white leading-tight max-w-2xl">{{ nextEvent.title }}</h3>
                  <div class="flex flex-wrap gap-6 text-slate-300 text-sm font-bold">
                    <span class="flex items-center gap-2"><span class="mdi mdi-calendar text-indigo-400"></span>{{ nextEvent.date }}</span>
                    <span class="flex items-center gap-2"><span class="mdi mdi-map-marker text-indigo-400"></span>{{ nextEvent.location }}</span>
                  </div>
                </div>
                <div class="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/20">
                  {{ nextEvent.startingIn }} left
                </div>
              </div>
              <div class="p-6 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-slate-50">
                <div class="flex items-center gap-4">
                  <div class="flex -space-x-3">
                    <img v-for="i in nextEvent.attendees" :key="i" :src="i" class="w-10 h-10 rounded-full border-4 border-white object-cover" />
                    <div class="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">+{{ nextEvent.extraAttendeesCount }}</div>
                  </div>
                  <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Participants</p>
                </div>
                <div class="flex gap-3 w-full sm:w-auto">
                  <BaseButton variant="secondary" size="md" class="flex-1">
                    Details
                  </BaseButton>

                  <BaseButton variant="primary" size="md" class="flex-1">
                    Manage
                  </BaseButton>
                </div>
              </div>
            </div>
          </section>

          <section class="lg:col-span-4">
            <h2 class="text-2xl font-black text-slate-900 font-headline mb-6">Upcoming</h2>
            <div class="space-y-4">
              <div v-for="event in upcomingEvents" :key="event.title" class="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all group">
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-indigo-50 rounded-xl flex flex-col items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span class="text-[9px] font-black">{{ event.month }}</span>
                    <span class="text-lg font-black leading-none">{{ event.day }}</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-slate-800 text-sm">{{ event.title }}</h4>
                    <p class="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{{ event.location }}</p>
                  </div>
                </div>
              </div>
              <button class="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-600 transition-all">
                + Schedule New
              </button>
            </div>
          </section>
        </div>

        <section>
          <h2 class="text-2xl font-black text-slate-900 font-headline mb-8">Engagement Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 relative overflow-hidden group">
              <span class="mdi mdi-account-star absolute -right-4 -bottom-4 text-8xl text-indigo-100 group-hover:scale-110 transition-transform"></span>
              <p class="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1 relative">Volunteers</p>
              <h4 class="text-4xl font-black text-indigo-700 relative">{{ engagementStats.totalVolunteers }}</h4>
            </div>
            <div class="p-8 bg-white rounded-3xl border border-slate-200 relative overflow-hidden group">
              <span class="mdi mdi-trending-up absolute -right-4 -bottom-4 text-8xl text-slate-50 group-hover:scale-110 transition-transform"></span>
              <p class="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 relative">Trend</p>
              <h4 class="text-4xl font-black text-emerald-600 relative">{{ engagementStats.attendanceTrend }}</h4>
            </div>
            <div class="p-8 bg-white rounded-3xl border border-slate-200 relative overflow-hidden group">
              <span class="mdi mdi-comment-check absolute -right-4 -bottom-4 text-8xl text-slate-50 group-hover:scale-110 transition-transform"></span>
              <p class="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 relative">Satisfaction</p>
              <h4 class="text-4xl font-black text-slate-900 relative">{{ engagementStats.citizenFeedback }}</h4>
            </div>
          </div>
        </section>

        <section>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 class="text-2xl font-black text-slate-900 font-headline">Full Event List</h2>
            <div class="flex gap-3">
              <div class="relative">
                <span class="mdi mdi-magnify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                <input class="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64" placeholder="Search events..." type="text"/>
              </div>
              <button class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">Filter</button>
            </div>
          </div>

          <BaseTable 
              :headers="['Event Detail', 'Date', 'Category', 'Status']" 
              :totalCount="allEvents.length"
          >
              <template #rows>
                <tr v-for="event in allEvents" :key="event.id" class="hover:bg-slate-50/50 transition-colors group">
                    
                    <td class="px-8 py-5">
                    <div class="flex flex-col">
                        <span class="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm">
                        {{ event.name }}
                        </span>
                        <span class="text-[10px] text-slate-400 font-medium italic">
                        {{ event.location }}
                        </span>
                    </div>
                    </td>

                    <td class="px-8 py-5">
                    <span class="text-sm font-bold text-slate-600">{{ event.date }}</span>
                    </td>

                    <td class="px-8 py-5">
                    <BaseBadge 
                        variant="primary" 
                        mode="solid"
                    >
                        {{ event.category }}
                    </BaseBadge>
                    </td>

                    <td class="px-8 py-5">
                    <BaseBadge 
                        :variant="event.status === 'Upcoming' ? 'warning' : event.status === 'Ongoing' ? 'primary' : 'secondary'" 
                        dot
                    >
                        {{ event.status }}
                    </BaseBadge>
                    </td>

                    <td class="px-8 py-5 text-right">
                    <button class="text-indigo-600 text-xs font-black hover:underline tracking-widest uppercase">
                        Manage
                    </button>
                    </td>
                </tr>
              </template>
          </BaseTable>
        </section>
      </div>
  </div>
</template>

<style scoped>
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
</style>