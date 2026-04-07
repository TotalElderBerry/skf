<script setup>
import { ref } from 'vue'
import BaseHeading from '../../../../components/base/BaseHeading.vue'
import BaseTextArea from '../../../../components/base/BaseTextArea.vue'
import PostComposer from '../../../../components/shared/post/PostComposer.vue'

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
          <BasePageHeader 
            title="Community Feed" 
            subtitle="Connect and share updates with the San Lorenzo community"
          >
            <template #actions>
              <BaseBadge variant="primary" mode="solid">
                Official Council
              </BaseBadge>
            </template>
          </BasePageHeader>

          <PostComposer 
            placeholder="What's the latest update for San Lorenzo?"
            @post="null"
          />

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
              <BaseSidebarItem 
                v-for="topic in trendingTopics" 
                :key="topic.tag"
                :label="topic.tag"
                :title="topic.title"
                :subtitle="`${topic.count} this week`"
              />
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