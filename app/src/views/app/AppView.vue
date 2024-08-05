<template>
  <div class="flex w-full h-screen overflow-hidden">
    <NavbarComponent class="shrink-0" />

    <!-- App -->
    <RouterView />
    <!-- App -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { NavbarComponent } from './components'

export default defineComponent({
  name: 'AppView',
  components: {
    RouterView,
    NavbarComponent
  }
})
</script>

<style lang="scss" scoped></style>
