<template>
  <div class="w-full">
    <!-- TOPBAR -->
    <div class="elevation-low h-12 py-2 px-4 flex align-center"></div>
    <!-- TOPBAR -->
    <div class="content w-full flex">
      <ChatComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChatComponent } from './components'

export default defineComponent({
  name: 'DirectMessageView',
  components: {
    ChatComponent
  }
})
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 3rem);
}
</style>
