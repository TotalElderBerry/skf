<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

// Navigation State
const activeTab = ref('Events')
const tabs = [{label: 'Events', to: "events"}, {label: 'Users', to: "users"}, {label: 'Posts', to: "posts"}]

// Header & Overview Data
const councilInfo = ref({
  name: 'Barangay San Lorenzo SK Council',
  description: 'Empowering the youth through sustainable initiatives, digital inclusion, and community-led leadership programs.',
  activeUsers: 150,
  totalEvents: 24
})

</script>

<template>
    <div>
        <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">
            <main class="ml-64 p-8 lg:p-12 min-h-screen">

                <section class="mb-12">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h1 class="text-4xl font-black tracking-tight text-slate-900 mb-2 font-headline">
                        {{ councilInfo.name }}
                        </h1>
                        <p class="text-slate-500 max-w-xl leading-relaxed font-medium">
                        {{ councilInfo.description }}
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <div class="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 min-w-[140px]">
                        <p class="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Active Users</p>
                        <p class="text-3xl font-black text-indigo-600 font-headline">{{ councilInfo.activeUsers }}</p>
                        </div>
                        <div class="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 min-w-[140px]">
                        <p class="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Total Events</p>
                        <p class="text-3xl font-black text-indigo-600 font-headline">{{ councilInfo.totalEvents }}</p>
                        </div>
                    </div>
                    </div>
                </section>

                <div class="flex space-x-8 border-b border-slate-200 mb-10">
                    <NuxtLink 
                    v-for="tab in tabs" :key="tab.label" :to="tab.to" @click="activeTab = tab.label"
                    :class="['pb-4 text-sm font-bold tracking-wide transition-colors relative', activeTab === tab.label ? 'text-indigo-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600' : 'text-slate-400 hover:text-slate-600']"
                    >
                    {{ tab.label }}
                    </NuxtLink>
                </div>
                <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" :page-key="$route.path"/>
            </main>
    </div>
    </div>
</template>
<style scoped>
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }

/* Transition Animations */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(10px); /* Slides in from the right slightly */
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px); /* Slides out to the left slightly */
}
</style>