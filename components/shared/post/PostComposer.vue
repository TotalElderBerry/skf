<script setup>
import { ref } from 'vue'
import BaseTextArea from '../../base/BaseTextArea.vue'

const props = defineProps({
  placeholder: { type: String, default: "What's on your mind?" },
  buttonText: { type: String, default: 'Post Update' },
  userAvatar: { type: String, default: 'https://i.pravatar.cc/150?u=9' }
})

const emit = defineEmits(['post'])

const postContent = ref('')
const postError = ref('')

const handlePost = () => {
  if (!postContent.value.trim()) {
    postError.value = "Content cannot be empty"
    return
  }
  
  emit('post', postContent.value)
  postContent.value = '' // Clear after success
  postError.value = ''
}
</script>

<template>
  <BaseCard padding="p-6" class="space-y-4">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0">
        <img 
          :src="userAvatar" 
          class="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          alt="User Avatar"
        />
      </div>

      <BaseTextArea 
        v-model="postContent"
        :placeholder="placeholder"
        :error="postError"
        class="flex-1"
        rows="4"
      />
    </div>

    <template #footer>
      <div class="flex items-center justify-between">
        <div class="flex gap-1 pl-2 md:pl-14"> 
          <BaseIconButton icon="mdi-image-outline" variant="ghost" size="md" />
          <BaseIconButton icon="mdi-video-outline" variant="ghost" size="md" />
          <BaseIconButton icon="mdi-poll" variant="ghost" size="md" />
        </div>
        
        <BaseButton 
          variant="primary" 
          size="md"
          @click="handlePost"
        >
          {{ buttonText }}
        </BaseButton>
      </div>
    </template>
  </BaseCard>
</template>