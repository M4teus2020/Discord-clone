<script setup lang="ts">
import { VFadeTransition } from 'vuetify/components'
</script>

<template>
  <router-view v-slot="{ Component }">
    <VFadeTransition>
      <component :is="Component" />
    </VFadeTransition>
  </router-view>
</template>
