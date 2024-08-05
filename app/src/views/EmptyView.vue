<template>
  <div class="w-full">
    <!-- TOPBAR -->
    <div class="elevation-low h-12 py-2 px-4 flex align-center"></div>
    <!-- TOPBAR -->
    <div class="content w-full flex"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EmptyView'
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 3rem);
}
</style>
