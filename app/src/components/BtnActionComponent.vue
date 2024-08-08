<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps<{
  icon?: string
}>()

const iconComponent = computed(() => {
  return defineAsyncComponent(() => import(`./icons/${props.icon}Icon.vue`))
})
</script>

<template>
  <button
    class="align-center flex h-8 w-8 justify-center rounded-md hover:bg-[#3d3e45]"
    aria-label="Configurações de usuário"
    type="button"
  >
    <component v-if="icon" :is="iconComponent" />
    <slot v-else></slot>
  </button>
</template>
