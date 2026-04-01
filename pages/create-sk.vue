<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'admin'
})

// State
const municipality = ref('')
const barangay = ref('')
const email = ref('')

// Sample data (replace with API later)
const municipalities = [
  'Quezon City',
  'Makati City',
  'Pasig City',
  'Taguig City'
]

const barangayMap = {
  'Quezon City': ['Bagumbayan', 'Commonwealth', 'Batasan Hills'],
  'Makati City': ['Bel-Air', 'Poblacion'],
  'Pasig City': ['Ugong', 'Kapitolyo'],
  'Taguig City': ['Pembo', 'Fort Bonifacio']
}

// Computed barangays
const barangays = computed(() => {
  return barangayMap[municipality.value] || []
})

// Submit
const handleSubmit = () => {
  if (!municipality.value || !barangay.value || !email.value) {
    alert('Please complete all fields')
    return
  }

  const payload = {
    municipality: municipality.value,
    barangay: barangay.value,
    email: email.value,
    password: 'sk-default-123'
  }

  console.log('Submitting:', payload)

  // TODO: connect to API
}
</script>

<template>
  <main class="ml-64 p-8 lg:p-12 min-h-screen bg-slate-50">

    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-4xl font-black text-slate-900 mb-2">
        Add New <span class="text-indigo-600">SK Council</span>
      </h1>
      <p class="text-slate-500 max-w-xl">
        Register a new Sangguniang Kabataan council. Ensure correct municipality and barangay pairing.
      </p>
    </div>

    <!-- Form Container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <!-- Left Info Panel -->
      <div class="space-y-6">
        <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
          <h3 class="font-bold text-indigo-700 mb-2">Administrative Notice</h3>
          <p class="text-sm text-indigo-600">
            Newly created accounts will receive an email invitation to complete setup.
          </p>
        </div>

        <div class="p-6 bg-white rounded-2xl border">
          <h4 class="font-bold text-slate-800 mb-2">Guidelines</h4>
          <ul class="text-sm text-slate-500 space-y-2">
            <li>• Select municipality first</li>
            <li>• Barangay will auto-load</li>
            <li>• Use official email if possible</li>
          </ul>
        </div>
      </div>

      <!-- Form -->
      <div class="lg:col-span-2 bg-white rounded-3xl p-10 border shadow-sm">

        <form @submit.prevent="handleSubmit" class="space-y-8">

          <!-- Municipality + Barangay -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- Municipality -->
            <div>
              <label class="text-xs font-bold text-slate-400 uppercase">Municipality</label>
              <select 
                v-model="municipality"
                class="w-full mt-2 bg-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              >
                <option disabled value="">Select Municipality</option>
                <option v-for="m in municipalities" :key="m">{{ m }}</option>
              </select>
            </div>

            <!-- Barangay -->
            <div>
              <label class="text-xs font-bold text-slate-400 uppercase">Barangay</label>
              <select 
                v-model="barangay"
                :disabled="!municipality"
                class="w-full mt-2 bg-slate-100 rounded-xl px-4 py-3 disabled:opacity-50"
              >
                <option disabled value="">
                  {{ municipality ? 'Select Barangay' : 'Select Municipality First' }}
                </option>
                <option v-for="b in barangays" :key="b">{{ b }}</option>
              </select>
            </div>

          </div>

          <!-- Email -->
          <div>
            <label class="text-xs font-bold text-slate-400 uppercase">Email Address</label>
            <input 
              v-model="email"
              type="email"
              placeholder="sk.council@barangay.gov.ph"
              class="w-full mt-2 bg-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="text-xs font-bold text-slate-400 uppercase">Default Password</label>
            <div class="flex gap-3 mt-2">
              <input 
                value="sk-default-123"
                disabled
                class="flex-1 bg-slate-100 rounded-xl px-4 py-3 font-mono"
              />
              <div class="px-4 py-3 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-xl flex items-center">
                Auto
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end gap-4 pt-6">
            <button 
              type="button"
              class="px-6 py-3 bg-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-200"
            >
              Cancel
            </button>

            <button 
              type="submit"
              class="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700"
            >
              Create Account
            </button>
          </div>

        </form>

      </div>

    </div>

  </main>
</template>