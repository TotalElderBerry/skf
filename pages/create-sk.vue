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
    <BasePageHeader 
      title="Add New SK Council" 
      subtitle="Register a new Sangguniang Kabataan council. Ensure correct municipality and barangay pairing."
    />

    <!-- Form Container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <!-- Left Info Panel -->
      <div class="space-y-6">
        <BaseCard variant="surface" border padding="p-6">
          <div class="flex items-start gap-4">
            <span class="mdi mdi-information text-2xl text-indigo-600"></span>
            <div>
              <h3 class="font-bold text-indigo-700 mb-1">Administrative Notice</h3>
              <p class="text-sm text-indigo-600 leading-tight">
                Newly created accounts will receive an email invitation to complete setup.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard variant="white" border padding="p-6">
          <h4 class="font-bold text-slate-800 mb-3">Registration Guidelines</h4>
          <ul class="text-sm text-slate-500 space-y-3">
            <li class="flex items-center gap-2"><span class="mdi mdi-check-circle-outline text-emerald-500"></span> Select municipality first</li>
            <li class="flex items-center gap-2"><span class="mdi mdi-check-circle-outline text-emerald-500"></span> Barangay will auto-load</li>
            <li class="flex items-center gap-2"><span class="mdi mdi-check-circle-outline text-emerald-500"></span> Use official email if possible</li>
          </ul>
        </BaseCard>
      </div>

      <!-- Form -->
      <BaseCard variant="white" elevation="sm" padding="p-10" class="lg:col-span-2">

        <form @submit.prevent="handleSubmit" class="space-y-8">

          <!-- Municipality + Barangay -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <BaseSelect 
              v-model="municipality"
              label="Municipality"
              placeholder="Select Municipality"
              :options="municipalities"
            />

            <BaseSelect 
              v-model="barangay"
              label="Barangay"
              :placeholder="municipality ? 'Select Barangay' : 'Select Municipality First'"
              :disabled="!municipality"
              :options="barangays"
            />

          </div>

          <!-- Email -->
          <BaseInput 
            v-model="email"
            label="Email Address"
            type="email"
            icon="mdi-email-outline"
            placeholder="sk.council@barangay.gov.ph"
            variant="subtle"
          />

          <!-- Password -->
          <div>
            <div class="flex gap-3 mt-2">
              <BaseInput 
                v-model="password"
                label="Default Password"
                type="password"
                icon="mdi-email-outline"
                placeholder="password"
                variant="subtle"
              />
              <div class="px-4 py-3 mt-6 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-xl flex items-center">
                Auto
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end gap-4 pt-6">
            <BaseButton 
              type="button"
              variant="secondary"
              size="md"
              @click="$router.back()"
            >
              Cancel
            </BaseButton>

            <BaseButton 
              type="submit"
              variant="primary"
              size="md"
            >
              Create Account
            </BaseButton>
          </div>

        </form>
      </BaseCard>

    </div>

  </main>
</template>