<script setup>
import { ref } from 'vue'
import BaseTable from '../../../components/base/BaseTable.vue'
import BaseHeading from '../../../../components/base/BaseHeading.vue'

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
          <BasePageHeader 
            title="Constituent Directory" 
            subtitle="Manage and view residents of San Lorenzo"
          >
            <template #actions>
              <div class="relative flex-grow md:w-64">
                <BaseInput
                  v-model="searchQuery"
                  placeholder="Search members..."
                  icon="mdi-magnify"
                />
              </div>
              <BaseIconButton 
                icon="mdi-filter-variant" 
                variant="secondary" 
              />
            </template>
          </BasePageHeader>

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
                                <BaseBadge 
                                    :variant="person.status === 'Active' ? 'success' : 'secondary'"
                                    dot
                                >
                                    {{ person.status }}
                                </BaseBadge>
                            </td>

                            <td class="px-8 py-5 text-right">
                              <BaseButton variant="primary" size="sm">
                                  Manage
                              </BaseButton>
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
              <BaseStatsCard 
                label="Total Population"
                :value="constituentStats.total"
                :trend="`${constituentStats.growth} from last month`"
                icon="mdi-account-group"
                variant="primary"
              />

              <BaseStatsCard 
                label="Active Today"
                :value="constituentStats.activeToday"
                icon="mdi-lightning-bolt"
                variant="white"
              />
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