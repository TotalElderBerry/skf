<template>
  <header class="fixed top-0 right-0 left-0 z-40 bg-white/80 backdrop-blur-xl h-20 ml-64 flex justify-between items-center px-8 border-b border-slate-100">
    
    <div class="relative w-72 lg:w-96">
      <span class="mdi mdi-magnify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></span>
      <input 
        class="w-full bg-slate-100/50 border-transparent rounded-full py-2 pl-12 pr-6 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="Search everything..."
      />
    </div>

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <button class="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-indigo-600">
           <span class="mdi mdi-bell text-xl"></span>
        </button>
        <button class="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-indigo-600">
           <span class="mdi mdi-cog text-xl"></span>
        </button>
      </div>

      <div class="h-8 w-[1px] bg-slate-200"></div>

      <div class="flex items-center gap-4">
        <div class="text-right hidden lg:block">
          <p class="text-xs font-black text-slate-900 leading-none">SK Admin</p>
          <p class="text-[10px] text-indigo-600 font-black uppercase tracking-widest mt-1">Super Admin</p>
        </div>
        <div class="p-0.5 border-2 border-indigo-100 rounded-full shadow-sm">
          <img class="w-9 h-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLK2UkJOKqLkjOU94dzy16qSs1Dj6TQvshEegUCs_-tDy8aGqjUNJnLOuY0Hv6xMgK0wpuTeHntjy5AKsqB97nuZZKXNn-rkpQTdNkgrWDiT3D4gH4KWCXrDBg0dhlL-xCMMlg_el7nI_hW0WyoCgTw1s1IuKdD_ilSv-givnwdB2xVaKkoGqPVFUrx5eV31YQ8WJ87G6K9SCL9kBpVe2qpTHTtSkEYH0wBK2BrplH_COBsuZAh0ZweCz0OQD6PwdP6-QRbJT6zDI5"/>
        </div>
      </div>
    </div>

  </header>
</template>