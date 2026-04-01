<script setup>
defineProps({
  headers: {
    type: Array,
    required: true
  },
  totalCount: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-slate-50/50 border-b border-slate-100">
            <th 
              v-for="header in headers" 
              :key="header"
              class="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap"
            >
              {{ header }}
            </th>
            <th class="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
              Actions
            </th>
          </tr>
        </thead>
        
        <tbody class="divide-y divide-slate-50">
          <slot name="rows" />
        </tbody>
      </table>
    </div>

    <div class="px-8 py-5 bg-slate-50/30 border-t border-slate-50 flex justify-between items-center mt-auto">
      <p class="text-[10px] text-slate-400 font-black uppercase tracking-widest">
        Showing {{ totalCount }} Entries
      </p>
      <div class="flex gap-2">
        <button class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all active:scale-95">
          Previous
        </button>
        <button class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all active:scale-95">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the table doesn't collapse on small screens */
table {
  min-width: 600px;
}
</style>