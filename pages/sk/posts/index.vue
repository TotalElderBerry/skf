<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

// Feed Data
const posts = ref([
  {
    id: 1,
    author: 'Maria Santos',
    role: 'Public',
    time: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?u=11',
    content: "Exciting progress on our Green San Lorenzo initiative! 🌿 We've successfully planted over 200 saplings across the north corridor today. Thank you to all the volunteers! #GreenSanLorenzo #SKCouncil",
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    stats: { likes: 42, comments: 12, shares: 5 }
  }
])

// Sidebar Data (Uniform with "Upcoming" style)
const trendingTopics = ref([
  { tag: '#YouthSummit2024', title: 'Digital Future Planning', count: '1.2k posts' },
  { tag: '#GreenSanLorenzo', title: 'Tree Planting Drive', count: '840 posts' },
  { tag: '#CouncilUpdates', title: 'New Library Resource', count: '420 posts' }
])

const communityLeaders = ref([
  { name: 'Ricardo Jose', role: 'Education Head', avatar: 'https://i.pravatar.cc/150?u=15' },
  { name: 'Anna Luna', role: 'Youth Volunteer', avatar: 'https://i.pravatar.cc/150?u=16' }
])
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-body text-slate-800 antialiased overflow-x-hidden">
    <div class="space-y-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <section class="lg:col-span-8 space-y-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
            <h2 class="text-2xl font-black text-slate-900 font-headline">Community Feed</h2>
            <div class="flex gap-3">
              <span class="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-100">
                Official Council
              </span>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 space-y-4">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/150?u=9" 
                  class="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  alt="User"
                />
              </div>

              <div class="flex-1">
                <textarea 
                  class="w-full bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-2xl p-4 text-sm resize-none h-28 placeholder:text-slate-400 outline-none transition-all" 
                  placeholder="What's the latest update for San Lorenzo?"
                ></textarea>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-50">
              <div class="flex gap-1 pl-14"> <button class="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-all">
                  <span class="mdi mdi-image-outline text-xl text-indigo-500"></span>
                </button>
                <button class="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-all">
                  <span class="mdi mdi-video-outline text-xl text-indigo-500"></span>
                </button>
                <button class="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-all">
                  <span class="mdi mdi-poll text-xl text-indigo-500"></span>
                </button>
              </div>
              
              <button class="px-8 py-3 bg-indigo-600 text-white font-black text-sm rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 active:scale-95 transition-all">
                Post Update
              </button>
            </div>
          </div>

          <div class="space-y-8">
            <article v-for="post in posts" :key="post.id" class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div class="p-6 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <img :src="post.avatar" class="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <h4 class="text-sm font-black text-slate-900 leading-none">{{ post.author }}</h4>
                    <p class="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{{ post.time }} • {{ post.role }}</p>
                  </div>
                </div>
                <button class="text-slate-400 hover:text-slate-900 transition-colors"><span class="mdi mdi-dots-horizontal text-xl"></span></button>
              </div>
              <div class="px-8 pb-4">
                <p class="text-sm text-slate-600 leading-relaxed">{{ post.content }}</p>
              </div>
              <div v-if="post.image" class="px-4 pb-4">
                <img :src="post.image" class="w-full aspect-video object-cover rounded-2xl shadow-inner" />
              </div>
              <div class="px-8 py-4 flex items-center justify-between border-t border-slate-50">
                <div class="flex gap-6">
                  <button class="flex items-center gap-2 group">
                    <span class="mdi mdi-heart-outline text-xl text-slate-400 group-hover:text-rose-500 transition-colors"></span>
                    <span class="text-xs font-black text-slate-500">{{ post.stats.likes }}</span>
                  </button>
                  <button class="flex items-center gap-2 group">
                    <span class="mdi mdi-chat-outline text-xl text-slate-400 group-hover:text-indigo-600 transition-colors"></span>
                    <span class="text-xs font-black text-slate-500">{{ post.stats.comments }}</span>
                  </button>
                </div>
                <div class="flex -space-x-2">
                  <div v-for="i in 3" :key="i" class="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                  <div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[8px] font-black text-indigo-600 border-2 border-white">+39</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="lg:col-span-4 space-y-10">
          <div>
            <h2 class="text-2xl font-black text-slate-900 font-headline mb-6">Trending</h2>
            <div class="space-y-4">
              <div v-for="topic in trendingTopics" :key="topic.tag" class="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all group cursor-pointer">
                <div class="flex flex-col">
                  <span class="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">{{ topic.tag }}</span>
                  <h4 class="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">{{ topic.title }}</h4>
                  <p class="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{{ topic.count }} this week</p>
                </div>
              </div>
              <button class="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-600 transition-all">
                View All Insights
              </button>
            </div>
          </div>

        </section>
      </div>

    </div>
  </div>
</template>

<style scoped>
.font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
</style>