<script setup>
defineProps({
  modelValue: [String, Number],
  placeholder: { type: String, default: 'Search...' },
  icon: { type: String, default: null }, // e.g., 'mdi-magnify'
  type: { type: String, default: 'text' },
  variant: { 
    type: String, 
    default: 'subtle', // 'subtle' (slate-100), 'outline'
    validator: (v) => ['subtle', 'outline'].includes(v)
  }
})

defineEmits(['update:modelValue'])

const variants = {
  subtle: 'bg-slate-100/50 border-transparent focus:bg-white',
  outline: 'bg-white border-slate-200 focus:border-indigo-500'
}
</script>

<template>
  <div class="relative w-full group">
    <div 
      v-if="icon" 
      class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
    >
      <span :class="['mdi text-slate-400 transition-colors group-focus-within:text-indigo-500', icon]"></span>
    </div>

    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        'w-full rounded-full py-2.5 text-sm transition-all focus:ring-2 focus:ring-indigo-500/20 outline-none border',
        icon ? 'pl-11 pr-6' : 'px-6',
        variants[variant]
      ]"
    />
  </div>
</template>