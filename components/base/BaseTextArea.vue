<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Enter text...' },
  label: { type: String, default: '' },
  rows: { type: [String, Number], default: 4 },
  error: { type: String, default: '' }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full flex flex-col gap-1.5">
    <label v-if="label" class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
      {{ label }}
    </label>

    <div class="relative group">
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :rows="rows"
        :class="[
          'w-full p-4 text-sm transition-all outline-none resize-none font-medium',
          'bg-slate-50 border border-outline rounded-2xl',
          'placeholder:text-slate-400 text-slate-700',
          'focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 focus:bg-white',
          error ? 'border-rose-300 focus:ring-rose-500/10 focus:border-rose-500/30' : ''
        ]"
      ></textarea>

      <transition name="fade">
        <p v-if="error" class="text-[10px] font-bold text-rose-500 mt-1 ml-1 uppercase tracking-tight">
          {{ error }}
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>