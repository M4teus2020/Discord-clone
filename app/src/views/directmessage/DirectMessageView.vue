<script setup lang="ts">
import { ChatComponent } from './components'
</script>

<template>
  <div class="w-full">
    <!-- TOPBAR -->
    <div class="elevation-low align-center flex h-12 px-4 py-2"></div>
    <!-- TOPBAR -->
    <div class="content flex w-full">
      <ChatComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 3rem);
}
</style>
