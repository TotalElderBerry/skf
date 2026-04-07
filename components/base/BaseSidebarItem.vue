<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: null },
  label: { type: String, default: null },
  icon: { type: String, default: null },
  image: { type: String, default: null },
  dateMonth: { type: String, default: null },
  dateDay: { type: String, default: null },
  to: { type: [String, Object], default: null }
})
</script>

<template>
  <component 
    :is="to ? 'NuxtLink' : 'div'" 
    :to="to"
    class="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all group flex gap-4 cursor-pointer"
  >
    <!-- Date Badge -->
    <div 
      v-if="dateMonth && dateDay" 
      class="w-12 h-12 bg-indigo-50 rounded-xl flex flex-col items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
    >
      <span class="text-[9px] font-black uppercase">{{ dateMonth }}</span>
      <span class="text-lg font-black leading-none">{{ dateDay }}</span>
    </div>

    <!-- Image/Avatar -->
    <img 
      v-else-if="image" 
      :src="image" 
      class="w-12 h-12 rounded-xl object-cover border border-slate-100"
    />

    <!-- Icon -->
    <div 
      v-else-if="icon" 
      class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors"
    >
      <span :class="['mdi text-xl', icon]"></span>
    </div>

    <div class="flex-1 flex flex-col justify-center">
      <span 
        v-if="label" 
        class="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1 leading-none"
      >
        {{ label }}
      </span>
      <h4 class="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
        {{ title }}
      </h4>
      <p 
        v-if="subtitle" 
        class="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight leading-none"
      >
        {{ subtitle }}
      </p>
    </div>
  </component>
</template>
