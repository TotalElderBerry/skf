<script setup>
defineProps({
  modelValue: [String, Number],
  label: { type: String, default: null }, // Added label prop
  placeholder: { type: String, default: 'Search...' },
  icon: { type: String, default: null },
  type: { type: String, default: 'text' },
  variant: { 
    type: String, 
    default: 'subtle', 
    validator: (v) => ['subtle', 'outline'].includes(v)
  }
})

defineEmits(['update:modelValue'])

const variants = {
  subtle: 'bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500/20',
  outline: 'bg-white border-slate-200 focus:border-indigo-500'
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full group font-body">
    <label v-if="label" 
      class="text-[10px] font-black uppercase tracking-widest transition-colors ml-1 group-focus-within:text-indigo-600 text-slate-400"
    >
      {{ label }}
    </label>

    <div class="relative w-full">
      <div 
        v-if="icon" 
        class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
      >
        <span :class="['mdi text-xl transition-colors group-focus-within:text-indigo-500 text-slate-400', icon]"></span>
      </div>

      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :class="[
          'w-full rounded-xl py-3 text-sm font-bold text-slate-900 transition-all focus:ring-4 focus:ring-indigo-500/10 outline-none border',
          icon ? 'pl-12 pr-4' : 'px-4',
          variants[variant]
        ]"
      />
    </div>
  </div>
</template>