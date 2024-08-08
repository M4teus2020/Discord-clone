<script setup lang="ts">
import { NavbarComponent } from './components'
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <NavbarComponent class="shrink-0" />

    <!-- App -->
    <router-view />
    <!-- App -->
  </div>
</template>

<style lang="scss" scoped></style>
