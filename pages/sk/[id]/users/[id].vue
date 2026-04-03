<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

const route = useRoute()

// Tab Logic - Matching your parent's underline style exactly
const activeSubTab = ref('Personal Information')
const subTabs = [
  { label: 'Personal Information', icon: 'person' },
  { label: 'Educational Background', icon: 'school' },
  { label: 'Employment', icon: 'work' },
  { label: 'Other Information', icon: 'person_add' },
  { label: 'Voter Information', icon: 'ballot' },
  { label: 'Emergency Contact', icon: 'contact_emergency' }
]

const user = ref({
  name: 'Isabella Santos',
  role: 'Resident • Lead Curator',
  dept: 'Product & Regional Governance Department',
  id: route.params.id || 'IS-2021-984',
  phone: '+1 (555) 098-4432',
  access: 'isabella_admin',
  email: 'isabella.s@curator.io'
})
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-700">
    
    <div class="bg-white rounded-2xl p-1 shadow-[0px_12px_32px_rgba(44,47,48,0.04)] border border-slate-100">
      <div class="flex flex-wrap items-center gap-8 px-6 border-b border-slate-50">
        <button 
          v-for="tab in subTabs" :key="tab.label"
          @click="activeSubTab = tab.label"
          :class="[
            'py-5 text-xs font-bold tracking-wide transition-all relative flex items-center gap-2 outline-none',
            activeSubTab === tab.label 
              ? 'text-[#4546d7] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4546d7]' 
              : 'text-slate-400 hover:text-slate-600'
          ]"
        >
          <span class="material-symbols-outlined text-lg transition-colors">{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </div>
    </div>

    <section class="bg-white rounded-3xl shadow-[0px_12px_32px_rgba(44,47,48,0.04)] p-10 border border-slate-100">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="relative">
          <div class="w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-[#4546d7] to-[#963776] shadow-xl">
            <img class="w-full h-full rounded-full object-cover border-4 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" />
          </div>
          <div class="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-lg">
            <span class="material-symbols-outlined text-[#4546d7] text-xl font-bold">verified</span>
          </div>
        </div>
        
        <div class="flex-1 text-center lg:text-left lg:border-r border-slate-100 lg:pr-12">
          <h1 class="text-4xl font-extrabold tracking-tight text-[#2c2f30] mb-2 font-headline">{{ user.name }}</h1>
          <p class="text-[#4546d7] font-black text-xs uppercase tracking-[0.2em]">{{ user.role }}</p>
          <p class="text-slate-400 text-sm mt-2 font-medium">{{ user.dept }}</p>
        </div>

        <div class="grid grid-cols-2 gap-x-16 gap-y-6 flex-1">
          <div v-for="(val, label) in { 'Staff ID': user.id, 'Phone': user.phone, 'Access': user.access, 'Email': user.email }" :key="label">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{{ label }}</p>
            <p class="text-sm font-bold text-[#2c2f30]">{{ val }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
      
      <div class="bg-white rounded-3xl shadow-[0px_12px_32px_rgba(44,47,48,0.04)] p-10 border border-slate-100">
        <div class="flex justify-between items-center mb-10 pb-4 border-b border-slate-50">
          <h3 class="text-xl font-extrabold text-[#2c2f30] font-headline">Personal information</h3>
          <button class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 hover:text-[#4546d7] hover:bg-indigo-50 transition-all">
            <span class="material-symbols-outlined text-xl">edit</span>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
          <div v-for="(val, key) in { 
            'Gender': 'Female', 
            'Date of birth': 'October 14th, 1994', 
            'Identity code': '8842-1193-4422', 
            'Hometown': 'New York City, NY',
            'Nationality': 'United States',
            'Religion': 'None',
            'Language': 'English, Spanish, Portuguese',
            'Marital status': 'Single'
          }" :key="key">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{{ key }}</p>
            <p class="text-sm font-bold text-[#2c2f30]">{{ val }}</p>
          </div>
          <div class="sm:col-span-2">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Permanent address</p>
            <p class="text-sm font-bold text-[#2c2f30] leading-relaxed">122 Fifth Avenue, South District Tower A, New York</p>
          </div>
          <div class="sm:col-span-2">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Current address</p>
            <p class="text-sm font-bold text-[#2c2f30] leading-relaxed">122 Fifth Avenue, South District Tower A, New York</p>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="bg-white rounded-3xl shadow-[0px_12px_32px_rgba(44,47,48,0.04)] p-10 border border-slate-100">
           <div class="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
             <h3 class="text-xl font-extrabold text-[#2c2f30] font-headline">Education</h3>
             <span class="material-symbols-outlined text-[#4546d7] text-2xl">school</span>
           </div>
           <div class="space-y-8">
             <div class="flex justify-between items-start group">
               <div>
                 <p class="text-sm font-bold text-[#2c2f30] group-hover:text-[#4546d7] transition-colors">M.S. in Information Architecture</p>
                 <p class="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">Cornell University Tech</p>
               </div>
               <p class="text-[10px] font-black text-slate-300">2016-2018</p>
             </div>
             <div class="flex justify-between items-start group">
               <div>
                 <p class="text-sm font-bold text-[#2c2f30] group-hover:text-[#4546d7] transition-colors">B.A. Media Studies & Communications</p>
                 <p class="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">New York University</p>
               </div>
               <p class="text-[10px] font-black text-slate-300">2012-2016</p>
             </div>
           </div>
        </div>

        <div class="bg-[#4546d7] rounded-3xl p-10 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
           <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">payments</span>
           <h3 class="text-lg font-extrabold mb-8 font-headline relative z-10">Account Information</h3>
           <div class="grid grid-cols-2 gap-y-8 gap-x-6 relative z-10">
             <div v-for="(val, label) in { 
               'Bank': 'Global Reserve Bank',
               'Account No.': '02520613401', 
               'Tax Code': '8456120546',
               'Insurance': '8456120546'
             }" :key="label">
               <p class="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">{{ label }}</p>
               <p class="text-sm font-bold">{{ val }}</p>
             </div>
           </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

.font-headline { font-family: 'Manrope', sans-serif; }

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>