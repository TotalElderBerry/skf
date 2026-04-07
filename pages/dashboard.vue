<script setup>
import { ref } from 'vue'
import BaseTable from '../components/base/BaseTable.vue'

definePageMeta({
  layout: 'admin'
})

// Mock Data
const federations = [
  { region: 'NCR', name: 'Quezon City Federation', authority: 'District 1-6 Authority', president: 'Maria Clara', initials: 'MC', status: 'Active' },
  { region: 'Region VII', name: 'Cebu City Federation', authority: 'Visayas Central Hub', president: 'Jose Rizal', initials: 'JR', status: 'Active' },
  { region: 'Region XI', name: 'Davao City Federation', authority: 'Mindanao South Operations', president: 'Andres Bonifacio', initials: 'AB', status: 'Pending' }
]

const headers = [
  'Region',
  'Federation Name',
  'President',
  'Status',
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">

    <main class="lg:ml-64 p-8 lg:p-12 min-h-screen">
      
      <BasePageHeader 
        title="SK Accounts" 
        subtitle="Manage and monitor Sangguniang Kabataan federations nationwide"
      >
        <template #actions>
          <BaseButton 
            to="/create-sk" 
            size="md" 
            variant="primary"
          >
            New Account
          </BaseButton>
        </template>
      </BasePageHeader>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BaseStatsCard 
          label="Total SK Accounts"
          value="1,248"
          trend="+12%"
          icon="mdi-account-group"
          variant="white"
        />
        <BaseStatsCard 
          label="Total Users"
          value="15,640"
          trend="+8%"
          icon="mdi-account"
          variant="white"
        />
        <BaseStatsCard 
          label="Active Federations"
          value="1,120"
          trend="90%"
          icon="mdi-check-circle"
          variant="white"
        />
      </section>

      <BaseCard variant="white" padding="p-8" class="mb-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-indigo-50/40 rounded-full blur-3xl -z-0"></div>
          
          <div class="flex items-center space-x-6 relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <span class="mdi mdi-information-outline text-2xl"></span>
            </div>
            <div>
              <BaseHeading level="4" weight="black" tracking="tight" class="text-xl">Import Existing Accounts</BaseHeading>
              <BaseText size="sm" variant="muted" class="max-w-xl mt-1">
                There are existing SKLoud accounts in your area. Add them to your Federation to sync data and permissions automatically.
              </BaseText>
            </div>
          </div>

          <BaseButton 
            variant="primary" 
            size="md" 
            class="relative z-10 shadow-xl shadow-slate-200"
            to="/add-existing"
          >
            <span class="mdi mdi-swap-horizontal mr-2"></span>
            Import Accounts
          </BaseButton>
        </div>
      </BaseCard>

      <section class="mb-12">
        <BasePageHeader 
          title="SK Councils Directory" 
          subtitle="Directory of all registered SK councils"
        >
          <template #actions>
            <BaseIconButton 
              icon="mdi-filter-variant" 
              variant="secondary" 
            />

            <BaseIconButton 
              icon="mdi-download" 
              variant="secondary" 
            />
          </template>
        </BasePageHeader>

        <div class="overflow-x-auto">
          <BaseTable
            :headers="headers"
            :totalCount="federations.length"
          >
            <template #rows>
              <tr
                v-for="fed in federations"
                :key="fed.name"
                class="group hover:bg-indigo-50/30 transition-colors cursor-default border-b border-slate-100 last:border-0"
              >
                <td class="px-8 py-6">
                  <span class="bg-indigo-100/50 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-600">
                    {{ fed.region }}
                  </span>
                </td>
                <td class="px-8 py-6">
                  <p class="text-sm font-bold text-slate-900">{{ fed.name }}</p>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">{{ fed.authority }}</p>
                </td>
                <td class="px-8 py-6">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-600 border border-slate-200">
                      {{ fed.initials }}
                    </div>
                    <span class="text-sm text-slate-700 font-bold">{{ fed.president }}</span>
                  </div>
                </td>
                <td class="px-8 py-6">
                  <BaseBadge 
                    :variant="fed.status === 'Active' ? 'success' : 'warning'" 
                    dot
                  >
                    {{ fed.status }}
                  </BaseBadge>
                </td>
                <td class="px-8 py-6 text-right">
                  <div class="flex justify-end gap-2 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    <NuxtLink :to="`/sk/${fed.name}/events`" class="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">
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

    <div class="fixed bottom-8 right-8 flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-2xl backdrop-blur-md z-50">
      <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
      <p class="text-xs font-bold tracking-tight text-slate-600 uppercase">System Status: Optimal</p>
    </div>

  </div>
</template>

<style scoped>
.font-headline { font-family: 'Manrope', sans-serif; }
.shadow-glow { box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); }
.mdi { display: inline-block; line-height: 1; }

:deep(html), :deep(body) {
  background-color: #F8FAFC !important;
}
</style>