<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const id = computed(() => route.params.id)

// Navigation State
const activeTab = ref('Events')
const tabs = [
    {label: 'Events', to: `/sk/${id.value}/events`}, 
    {label: 'Calendar', to: `/sk/${id.value}/calendar`},
    {label: 'Users', to: `/sk/${id.value}/users`}, 
    {label: 'Posts', to: `/sk/${id.value}/posts`}
]

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
        <div class="">
            <main class="">
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