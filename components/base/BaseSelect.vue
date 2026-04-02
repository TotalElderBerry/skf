<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: { type: String, default: 'Select' },
  options: { type: Array, default: () => [] },
  disabled: Boolean,
  // Using your icon prop pattern
  icon: { type: String, default: 'mdi-chevron-down' },
  searchIcon: { type: String, default: 'mdi-magnify' },
  clearIcon: { type: String, default: 'mdi-close' },
  checkIcon: { type: String, default: 'mdi-check' }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const searchQuery = ref('')
const containerRef = ref(null)

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  return props.options.filter(opt => 
    opt.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectOption = (option) => {
  emit('update:modelValue', option)
  isOpen.value = false
  searchQuery.value = ''
}

const clearSelection = () => {
  emit('update:modelValue', '')
}

const handleClickOutside = (e) => {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onUnmounted(() => window.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div class="flex flex-col gap-2 w-full relative font-body" ref="containerRef">
    <label v-if="label" 
      :class="[
        'text-[10px] font-black uppercase tracking-widest transition-colors ml-1',
        isOpen ? 'text-indigo-600' : 'text-slate-400'
      ]"
    >
      {{ label }}
    </label>

    <div 
      @click="!disabled && (isOpen = !isOpen)"
      :class="[
        'group flex items-center justify-between w-full h-12 px-4 bg-white border transition-all duration-200 cursor-pointer rounded-xl',
        isOpen ? 'border-2 border-indigo-600 shadow-md' : 'border-slate-200 shadow-sm hover:border-indigo-400/50',
        disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : 'active:scale-95'
      ]"
    >
      <div class="flex items-center gap-2 overflow-hidden">
        <div v-if="modelValue" class="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
        <span v-if="modelValue" class="text-sm font-bold text-slate-900 truncate">{{ modelValue }}</span>
        <span v-else class="text-sm text-slate-400 font-medium">{{ placeholder }}</span>
      </div>

      <div class="flex items-center gap-1">
        <button v-if="modelValue && !isOpen" 
          type="button"
          @click.stop="clearSelection"
          class="w-6 h-6 flex items-center justify-center rounded-full hover:bg-rose-50 hover:text-rose-600 text-slate-300 transition-colors"
        >
          <span :class="['mdi', clearIcon, 'text-base']"></span>
        </button>
        
        <span 
          :class="[
            'mdi text-xl transition-transform duration-300',
            icon,
            isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'
          ]"
        ></span>
      </div>
    </div>

    <transition name="dropdown">
      <div v-if="isOpen" 
        class="absolute top-[calc(100%+6px)] left-0 w-full bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden z-50"
      >
        <div class="p-2 border-b border-slate-100">
          <div class="relative">
            <span :class="['mdi absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg', searchIcon]"></span>
            <input 
              v-model="searchQuery"
              class="w-full h-9 pl-10 pr-4 bg-slate-50 border-none rounded-lg text-sm focus:ring-0 placeholder:text-slate-400 font-body" 
              placeholder="Search..." 
              type="text"
              @click.stop
            />
          </div>
        </div>

        <div class="max-h-48 overflow-y-auto scrollbar-thin py-1">
          <button 
            v-for="opt in filteredOptions" 
            :key="opt"
            type="button"
            @click.stop="selectOption(opt)"
            class="w-full text-left px-4 py-2.5 text-sm font-bold hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-slate-700 flex justify-between items-center"
          >
            {{ opt }}
            <span v-if="modelValue === opt" :class="['mdi text-indigo-600', checkIcon]"></span>
          </button>
          
          <div v-if="filteredOptions.length === 0" class="px-4 py-6 text-center">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">No results</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.scrollbar-thin::-webkit-scrollbar { width: 4px; }
.scrollbar-thin::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
</style>