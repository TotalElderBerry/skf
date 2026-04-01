<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'admin'
})

// State for search and selection
const searchQuery = ref('')
const selectedIds = ref([3])

// Sample Data
const localAccounts = ref([
  { id: 1, barangay: 'Poblacion I', municipality: 'Cebu City', chairman: 'Maria Santos', created: 'Oct 12, 2023', status: 'Eligible' },
  { id: 2, barangay: 'Mabolo', municipality: 'Cebu City', chairman: 'Juan Dela Cruz', created: 'Jan 05, 2023', status: 'Already Federated', disabled: true },
  { id: 3, barangay: 'Guadalupe', municipality: 'Cebu City', chairman: 'Elena Reyes', created: 'Nov 22, 2023', status: 'Eligible' },
  { id: 4, barangay: 'Banilad', municipality: 'Mandaue', chairman: 'Ricardo Gomez', created: 'Dec 01, 2023', status: 'Eligible' },
  { id: 5, barangay: 'Subangdaku', municipality: 'Mandaue', chairman: 'Liza Marcos', created: 'Feb 14, 2024', status: 'Eligible' },
])

const headers = [
  '', // Selection
  'Barangay',
  'Municipality',
  'Status'
]

// Computed for filtering and summary
const filteredAccounts = computed(() => {
  if (!searchQuery.value) return localAccounts.value
  return localAccounts.value.filter(acc => 
    acc.barangay.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    acc.municipality.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectedAccounts = computed(() => {
  return localAccounts.value.filter(acc => selectedIds.value.includes(acc.id))
})

// Actions
const toggleSelection = (id) => {
  const index = selectedIds.value.indexOf(id)
  if (index > -1) {
    selectedIds.value.splice(index, 1)
  } else {
    selectedIds.value.push(id)
  }
}

const handleImport = () => {
  if (selectedIds.value.length === 0) return
  console.log('Importing Accounts:', selectedIds.value)
}
</script>

<template>
  <main class="ml-64 p-8 lg:p-12 min-h-screen bg-slate-50 font-body antialiased">
    
    <div class="mb-10">
      <button @click="$router.back()" class="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-4 hover:underline">
        <span class="mdi mdi-arrow-left"></span>
        Back to Accounts
      </button>
      <h1 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">
        Import <span class="text-indigo-600">Existing Accounts</span>
      </h1>
      <p class="text-slate-500 max-w-2xl leading-relaxed">
        The following SKLoud accounts were found in your region. Select the councils you want to integrate into your current federation.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <div class="lg:col-span-2 space-y-6">
        
        <div class="relative">
          <span class="mdi mdi-magnify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search by Barangay or Municipality..." 
            class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none shadow-sm"
          />
        </div>

        <BaseTable
          :headers="headers"
          :totalCount="filteredAccounts.length"
        >
          <template #rows>
            <tr 
              v-for="acc in filteredAccounts" 
              :key="acc.id"
              class="group transition-colors border-b border-slate-50 last:border-0"
              :class="acc.disabled ? 'bg-slate-50/50 opacity-60' : 'hover:bg-indigo-50/30 cursor-pointer'"
              @click="!acc.disabled && toggleSelection(acc.id)"
            >
              <td class="p-5">
                <input 
                  type="checkbox" 
                  :checked="selectedIds.includes(acc.id)"
                  :disabled="acc.disabled"
                  class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer disabled:cursor-not-allowed"
                  @click.stop
                  @change="toggleSelection(acc.id)"
                />
              </td>
              <td class="p-5">
                <p class="font-bold text-slate-900">{{ acc.barangay }}</p>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">{{ acc.chairman }}</p>
              </td>
              <td class="p-5 text-sm text-slate-500 font-medium">
                {{ acc.municipality }}
              </td>
              <td class="p-5">
                <span 
                  class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight"
                  :class="acc.status === 'Eligible' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-400'"
                >
                  {{ acc.status }}
                </span>
              </td>
            </tr>
          </template>
        </BaseTable>
      </div>

      <div class="space-y-6">
        
        <div class="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div class="flex items-center justify-between mb-8">
            <h3 class="font-black text-slate-900 text-xl tracking-tight">Summary</h3>
            <div class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
              {{ selectedIds.length }} Selected
            </div>
          </div>

          <div class="space-y-6 mb-8">
            <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span class="mdi mdi-bank text-indigo-600 text-2xl"></span>
              <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Target Federation</p>
                <p class="text-slate-900 font-bold text-sm leading-tight">Cebu North District Federation</p>
              </div>
            </div>

            <div v-if="selectedAccounts.length > 0" class="space-y-3">
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accounts to Add</p>
              <div 
                v-for="item in selectedAccounts" 
                :key="item.id"
                class="flex justify-between items-center bg-white px-4 py-3 rounded-xl border border-slate-100 group"
              >
                <span class="text-sm font-bold text-slate-700">{{ item.barangay }}</span>
                <button @click.stop="toggleSelection(item.id)" class="text-slate-300 hover:text-red-500 transition-colors">
                  <span class="mdi mdi-close"></span>
                </button>
              </div>
            </div>
            <div v-else class="py-8 text-center border-2 border-dashed border-slate-100 rounded-2xl">
              <p class="text-xs text-slate-400 font-bold">No accounts selected</p>
            </div>
          </div>

          <div class="space-y-3">
            <BaseButton 
              variant="primary" 
              size="md" 
              class="w-full justify-center"
              :disabled="selectedIds.length === 0"
              @click="handleImport"
            >
              Add to Federation
            </BaseButton>

            <BaseButton 
              variant="secondary" 
              size="md" 
              class="w-full justify-center"
              @click="$router.back()"
            >
              Cancel Import
            </BaseButton>
          </div>
        </div>

        <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
          <span class="mdi mdi-information text-amber-600 text-xl"></span>
          <p class="text-[11px] text-amber-800 font-bold leading-relaxed italic">
            Imported accounts will immediately gain access to federation-level fiscal reports and auditing tools.
          </p>
        </div>

      </div>
    </div>

    <div class="fixed bottom-8 right-8 flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-2xl z-50">
      <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
      <p class="text-xs font-bold tracking-tight text-slate-600 uppercase">System Status: Optimal</p>
    </div>

  </main>
</template>

<style scoped>
.mdi {
  display: inline-block;
  line-height: 1;
}
</style>