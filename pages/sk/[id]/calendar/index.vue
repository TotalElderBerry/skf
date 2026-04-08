<script setup>
const route = useRoute()
const id = route.params.id

// Mock data for the calendar
const days = [
  { date: 28, prevMonth: true },
  { date: 29, prevMonth: true },
  { date: 30, prevMonth: true },
  { date: 1, currentMonth: true },
  { date: 2, currentMonth: true, event: { title: 'Town Hall', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXG6H_Yp-n6h1y-f9h_9I_R6h6e7e7y-h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0' } },
  { date: 3, currentMonth: true },
  { date: 4, currentMonth: true },
  { date: 5, currentMonth: true },
  { date: 6, currentMonth: true, event: { title: 'Budget Audit', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400' } },
  { date: 7, currentMonth: true, selected: true, event: { title: 'Youth Summit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjJWSUKqdDhFd4xNUwk2kGsDdkPyGiiUu9Di_VrlPQ9pD7MDBD2pgYbhtQJIZGuJQgCxvjg1PsbOxnb9_qu-JgON2VbAf_1R4S0bSVb4ehUAUVaVrSgCJkLhtfFZuLChHOE1q9UALTtFpiuW--pMTOQ8aRGQRsJKFAsHxpFK-lrq6zqeShVHFZv1aQbpbt2Dc83lK1YpnY90wpUh3tbCOUyLObRiYhmZFELp26Zc7G158YZ1Gu6Alxrumivht254nmxlIBq50YBDeI' } },
  { date: 8, currentMonth: true },
  { date: 9, currentMonth: true },
  { date: 10, currentMonth: true },
  { date: 11, currentMonth: true, event: { title: 'Holiday', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400' } },
  { date: 12, currentMonth: true },
  { date: 13, currentMonth: true },
  { date: 14, currentMonth: true },
  { date: 15, currentMonth: true },
  { date: 16, currentMonth: true },
  { date: 17, currentMonth: true },
  { date: 18, currentMonth: true },
  { date: 19, currentMonth: true },
  { date: 20, currentMonth: true },
  { date: 21, currentMonth: true }
]

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
</script>

<template>
  <div class="p-6 space-y-8 bg-background">
    <div class="flex flex-col lg:flex-row gap-6 h-full items-start">
      <!-- Left: Calendar Section -->
      <div class="flex-[2] w-full space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-extrabold text-on-surface tracking-tight font-headline">Events Calendar</h1>
            <p class="text-on-surface-variant text-sm opacity-70 font-body">Managing local governance activities for October 2023</p>
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
          <div class="grid grid-cols-7 gap-px bg-surface-container-high">
            <div 
              v-for="(day, idx) in days" 
              :key="idx"
              class="h-32 p-2 transition-colors cursor-pointer flex flex-col relative"
              :class="[
                day.prevMonth ? 'bg-surface-container-low opacity-30' : 'bg-surface-container-lowest hover:bg-surface-container-low',
                day.selected ? 'bg-primary/5 border-2 border-primary/20 ring-inset' : ''
              ]"
            >
              <span 
                class="text-xs font-bold px-1 mb-1 font-body"
                :class="day.selected ? 'text-primary' : 'text-on-surface'"
              >
                {{ day.date }}
              </span>
              <div v-if="day.event" class="flex-1 overflow-hidden relative">
                <img 
                  :alt="day.event.title" 
                  class="w-full h-full object-cover rounded-lg" 
                  :src="day.event.img"
                />
              </div>
              <div v-if="day.selected" class="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-primary/5"></div>
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
                <span class="text-sm font-bold text-on-surface">Saturday, Oct 7, 2023</span>
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
