<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { AvatarComponent } from '@/components'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

const props = defineProps<{
  icon?: string
  text: string
  user?: {
    avatarUrl: string
    status: string
  }
  path: string
}>()

const iconComponent = computed(() => {
  return defineAsyncComponent(() => import(`../../../components/icons/${props.icon}Icon.vue`))
})

const isActive = computed(() => {
  return route.path === props.path
})
</script>

<template>
  <li
    :class="`align-center mb-0.5 flex w-full gap-3 rounded px-2 py-1.5 hover:bg-[#35373c] hover:text-[#dbdee1] ${isActive ? 'bg-[#3f4147] text-white' : ''}`"
    @click="router.push(path)"
  >
    <div class="align-center flex h-8 w-8 shrink-0 justify-center">
      <component v-if="icon" :is="iconComponent" class="h-6 w-6" />
      <AvatarComponent v-if="user" :avatar-url="user.avatarUrl" :status="user.status" class="h-8 w-8" />
    </div>
    <span class="overflow-hidden overflow-ellipsis whitespace-nowrap">
      {{ text }}
    </span>
  </li>
</template>
