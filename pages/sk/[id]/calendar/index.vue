<script setup>
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths 
} from 'date-fns'

const route = useRoute()
const id = route.params.id

// Current View Date
const currentDate = ref(new Date(2023, 9, 7)) // Default to Oct 2023 per mockup

// Dynamic Calendar Days
const calendarDays = computed(() => {
  const start = startOfWeek(startOfMonth(currentDate.value))
  const end = endOfWeek(endOfMonth(currentDate.value))
  
  // Create 42 cells (6 rows) to ensure consistent layout
  const interval = eachDayOfInterval({ start, end })
  
  // If we have less than 42 days, add an extra week to maintain grid height if needed
  // However, startOfWeek/endOfWeek usually gives 35 or 42. 
  // Let's ensure at least 42 for a perfect grid look.
  let daysArray = interval.map(date => {
    const event = getEventForDay(date)
    return {
      date: date.getDate(),
      fullDate: date,
      currentMonth: isSameMonth(date, currentDate.value),
      prevMonth: !isSameMonth(date, currentDate.value) && date < currentDate.value,
      nextMonth: !isSameMonth(date, currentDate.value) && date > currentDate.value,
      selected: isSameDay(date, currentDate.value),
      event
    }
  })

  return daysArray
})

// Mock Events
const events = ref([
  { date: new Date(2023, 9, 2), title: 'Town Hall', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXG6H_Yp-n6h1y-f9h_9I_R6h6e7e7y-h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0' },
  { date: new Date(2023, 9, 6), title: 'Budget Audit', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400' },
  { date: new Date(2023, 9, 7), title: 'Youth Summit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJWSUKqdDhFd4xNUwk2kGsDdkPyGiiUu9Di_VrlPQ9pD7MDBD2pgYbhtQJIZGuJQgCxvjg1PsbOxnb9_qu-JgON2VbAf_1R4S0bSVb4ehUAUVaVrSgCJkLhtfFZuLChHOE1q9UALTtFpiuW--pMTOQ8aRGQRsJKFAsHxpFK-lrq6zqeShVHFZv1aQbpbt2Dc83lK1YpnY90wpUh3tbCOUyLObRiYhmZFELp26Zc7G158YZ1Gu6Alxrumivht254nmxlIBq50YBDeI' },
  { date: new Date(2023, 9, 11), title: 'Holiday', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400' },
])

const getEventForDay = (date) => events.value.find(e => isSameDay(e.date, date))

const nextMonth = () => currentDate.value = addMonths(currentDate.value, 1)
const prevMonth = () => currentDate.value = subMonths(currentDate.value, 1)
const selectDay = (day) => {
  if (day.currentMonth) {
    currentDate.value = day.fullDate
  }
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
</script>

<template>
  <div class="">
    <div class="flex flex-col lg:flex-row gap-6 h-full items-start">
      <!-- Left: Calendar Section -->
      <div class="flex-[2] w-full space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <BasePageHeader 
              title="Events Calendar" 
              :subtitle="`Managing local governance activities for ${format(currentDate, 'MMMM yyyy')}`"
            />
            <div class="flex gap-1 ml-4 bg-surface-container-low p-1 rounded-lg">
              <button @click="prevMonth" class="p-1 hover:bg-surface-container-lowest rounded-md transition-colors">
                <span class="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button @click="nextMonth" class="p-1 hover:bg-surface-container-lowest rounded-md transition-colors">
                <span class="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="flex bg-surface-container-low p-1 rounded-xl">
            <button class="px-4 py-2 bg-surface-container-lowest shadow-sm rounded-lg text-xs font-bold text-primary uppercase tracking-widest font-headline">Month</button>
            <button class="px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60 font-headline">Week</button>
            <button class="px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60 font-headline">Day</button>
          </div>
        </div>

        <div class="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden">
          <!-- Calendar Header -->
          <div class="grid grid-cols-7 border-b border-surface-container-high">
            <div 
              v-for="day in weekdays" 
              :key="day"
              class="py-4 text-center text-[10px] font-bold uppercase tracking-widest font-headline"
              :class="day === 'Sun' || day === 'Sat' ? 'text-primary' : 'text-on-surface-variant'"
            >
              {{ day }}
            </div>
          </div>
          <!-- Calendar Grid -->
          <div class="grid grid-cols-7 gap-px bg-surface-container-low">
            <div 
              v-for="(day, idx) in calendarDays" 
              :key="idx"
              @click="selectDay(day)"
              class="h-32 p-2 transition-colors cursor-pointer flex flex-col relative"
              :class="[
                !day.currentMonth ? 'bg-surface-container-low opacity-30 shadow-inner' : 'bg-surface-container-lowest hover:bg-surface-container-low',
                day.selected ? 'bg-primary/5 border-2 border-primary/20 ring-inset' : ''
              ]"
            >
              <span 
                class="text-xs font-bold px-1 mb-1 font-body"
                :class="day.selected ? 'text-primary' : 'text-on-surface'"
              >
                {{ day.date }}
              </span>
              <div v-if="day.event" class="flex-1 overflow-hidden relative group">
                <img 
                  :alt="day.event.title" 
                  class="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500" 
                  :src="day.event.img"
                />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p class="text-[9px] text-white font-bold truncate leading-none">{{ day.event.title }}</p>
                </div>
              </div>
              <div v-if="day.selected" class="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-primary/5 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Featured/Details Panel -->
      <aside class="flex-1 w-full lg:w-96 space-y-6">
        <div class="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden flex flex-col h-full border border-outline-variant/10">
          <div class="relative h-56 group">
            <img 
              alt="Featured Event Hero" 
              class="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjJWSUKqdDhFd4xNUwk2kGsDdkPyGiiUu9Di_VrlPQ9pD7MDBD2pgYbhtQJIZGuJQgCxvjg1PsbOxnb9_qu-JgON2VbAf_1R4S0bSVb4ehUAUVaVrSgCJkLhtfFZuLChHOE1q9UALTtFpiuW--pMTOQ8aRGQRsJKFAsHxpFK-lrq6zqeShVHFZv1aQbpbt2Dc83lK1YpnY90wpUh3tbCOUyLObRiYhmZFELp26Zc7G158YZ1Gu6Alxrumivht254nmxlIBq50YBDeI"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md font-headline">Featured Event</span>
              <h3 class="text-white text-xl font-extrabold mt-1 font-headline">Annual Youth Summit 2023</h3>
            </div>
          </div>
          <div class="p-6 space-y-6">
            <div class="flex items-center justify-between font-body">
              <div class="flex flex-col">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-50">Event Date</span>
                <span class="text-sm font-bold text-on-surface">{{ format(currentDate, 'EEEE, MMM d, yyyy') }}</span>
              </div>
              <div class="flex flex-col text-right">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-50">Expected</span>
                <span class="text-sm font-bold text-primary">450 Attendees</span>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                <div class="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div class="font-body">
                  <p class="text-[10px] font-bold uppercase tracking-widest opacity-50">Location</p>
                  <p class="text-xs font-semibold">City Hall Convention Center, Main Plaza</p>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                <div class="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <span class="material-symbols-outlined">schedule</span>
                </div>
                <div class="font-body">
                  <p class="text-[10px] font-bold uppercase tracking-widest opacity-50">Schedule</p>
                  <p class="text-xs font-semibold">09:00 AM - 05:00 PM (Local Time)</p>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-headline">About this event</p>
              <p class="text-xs text-on-surface-variant leading-relaxed font-body">
                A premier gathering of youth leaders from all 12 districts. The summit focuses on digital governance, sustainability initiatives, and community leadership development for the upcoming fiscal year.
              </p>
            </div>
            <div class="pt-4 flex gap-3">
              <button class="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm active:scale-[0.98] transition-transform font-headline">Edit Event</button>
              <button class="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-xl text-on-surface-variant hover:bg-secondary-container transition-all">
                <span class="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Calendar Summary Panel -->
        <div class="bg-primary/5 p-5 rounded-2xl border border-primary/10">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">info</span>
            <span class="text-[10px] font-bold text-primary uppercase tracking-widest font-headline">Calendar Summary</span>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="font-body">
              <p class="text-2xl font-extrabold text-on-surface">14</p>
              <p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Active Events</p>
            </div>
            <div class="font-body">
              <p class="text-2xl font-extrabold text-on-surface">02</p>
              <p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Pending Review</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
</style>
