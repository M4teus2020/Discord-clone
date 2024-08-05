<template>
  <button
    class="w-8 h-8 rounded-md hover:bg-[#3d3e45] flex align-center justify-center"
    aria-label="Configurações de usuário"
    type="button"
  >
    <component v-if="icon" :is="iconComponent" />
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'BtnActionComponent',
  props: {
    icon: {
      type: [String, Boolean],
      required: false,
      default: false
    }
  },
  computed: {
    iconComponent() {
      return defineAsyncComponent(() => import(`./icons/${this.icon}Icon.vue`))
    }
  }
})
</script>
