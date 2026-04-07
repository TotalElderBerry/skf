<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  trend: { type: String, default: null },
  icon: { type: String, default: null },
  variant: {
    type: String,
    default: 'white',
    validator: (v) => ['white', 'primary'].includes(v)
  }
})

const variantOverrides = {
  primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-200',
  white: 'bg-white border border-slate-200'
}

const labelClasses = {
  primary: 'text-indigo-100',
  white: 'text-slate-400'
}

const trendClasses = {
  primary: 'text-indigo-200',
  white: 'text-emerald-600' // Default to success color for white variant
}
</script>

<template>
  <div 
    :class="[
      'p-6 rounded-[2rem] relative overflow-hidden group transition-all duration-300',
      variantOverrides[variant]
    ]"
  >
    <span 
      v-if="icon" 
      :class="[
        'mdi absolute -right-4 -bottom-4 text-7xl transition-transform duration-500 group-hover:scale-110',
        icon,
        variant === 'primary' ? 'text-white/10' : 'text-slate-50'
      ]"
    ></span>

    <p :class="['text-[10px] font-black uppercase tracking-widest mb-1 relative z-10', labelClasses[variant]]">
      {{ label }}
    </p>

    <h4 :class="['text-4xl font-black relative z-10', variant === 'white' ? 'text-slate-900' : 'text-white']">
      {{ value }}
    </h4>

    <p 
      v-if="trend" 
      :class="['text-[10px] font-bold mt-2 italic relative z-10', trendClasses[variant]]"
    >
      {{ trend }}
    </p>
  </div>
</template>
