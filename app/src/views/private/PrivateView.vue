<script setup lang="ts">
import { SideBarComponent } from './components'
</script>

<template>
  <div class="flex flex-grow">
    <SideBarComponent />

    <RouterView class="h-full w-full" />
  </div>
</template>

<style lang="scss" scoped></style>
