<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const props = defineProps<{
  path?: string | boolean
  icon?: string | boolean
  iconClass?: string
  iconClassActive?: string
  pill?: boolean
  notificationCount?: number
  notification?: boolean
}>()

const route = useRoute()

const iconComponent = computed(() => {
  if (typeof props.icon === 'string') {
    return defineAsyncComponent(() => import(`./icons/${props.icon}Icon.vue`))
  }
  return null
})

const isActive = computed(() => {
  return route.matched.some(({ path }) => path === props.path) || route.fullPath === props.path
})

const activeClass = computed(() => {
  return props.iconClassActive && isActive.value ? props.iconClassActive : ''
})
</script>

<template>
  <li
    :class="`nav-item relative ${isActive ? 'active' : ''}`"
    @click="typeof path == 'string' ? router.push(path) : ''"
  >
    <div v-if="pill" class="pill align-center absolute left-[-0.75rem] flex h-full">
      <span :class="`block rounded-r-full bg-white transition-all ${notification ? 'h-2 w-1' : 'h-0 w-0'}`"></span>
    </div>

    <div
      :class="`icon-item align-center flex h-12 w-12 justify-center overflow-hidden rounded-full transition-all ${iconClass} ${activeClass}`"
    >
      <component v-if="icon" :is="iconComponent" />
      <slot v-else></slot>

      <span
        v-if="notificationCount"
        class="count-tag absolute bottom-0 right-0 min-w-4 rounded-lg bg-[#f23f42] px-1.5 text-center text-xs text-white"
      >
        {{ notificationCount }}
      </span>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.count-tag {
  box-shadow: 0 0 0px 4px #1e1f22;
}

.nav-item {
  &:hover {
    .pill span {
      width: 0.25rem !important;
      height: 1.25rem !important;
    }
    .icon-item {
      border-radius: 1rem;
    }
  }

  &.active {
    .pill span {
      width: 0.25rem !important;
      height: 2.5rem !important;
    }

    .icon-item {
      border-radius: 1rem;
    }
  }
}
</style>
