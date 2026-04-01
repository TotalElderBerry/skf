<template>
  <header class="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl h-20 ml-64 flex justify-between items-center px-8 border-b">
    
    <!-- Search -->
    <div class="relative w-96">
      <span class="mdi mdi-magnify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></span>
      <input 
        class="w-full bg-slate-100 rounded-full py-2.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-indigo-500"
        placeholder="Search..."
      />
    </div>

    <!-- Right -->
    <div class="flex items-center gap-6">
      <span class="mdi mdi-bell text-xl text-slate-400"></span>
      <span class="mdi mdi-cog text-xl text-slate-400"></span>

      <div class="h-8 w-[1px] bg-slate-200"></div>

      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold">SK Admin</p>
          <p class="text-[10px] text-indigo-600 font-bold">Super Admin</p>
        </div>

        <img class="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLK2UkJOKqLkjOU94dzy16qSs1Dj6TQvshEegUCs_-tDy8aGqjUNJnLOuY0Hv6xMgK0wpuTeHntjy5AKsqB97nuZZKXNn-rkpQTdNkgrWDiT3D4gH4KWCXrDBg0dhlL-xCMMlg_el7nI_hW0WyoCgTw1s1IuKdD_ilSv-givnwdB2xVaKkoGqPVFUrx5eV31YQ8WJ87G6K9SCL9kBpVe2qpTHTtSkEYH0wBK2BrplH_COBsuZAh0ZweCz0OQD6PwdP6-QRbJT6zDI5"/>
      </div>
    </div>

  </header>
</template>