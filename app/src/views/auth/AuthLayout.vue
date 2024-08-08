<script setup lang="ts">
import Background from '@/assets/login-background.svg'
</script>

<template>
  <div id="auth-layout">
    <img :src="Background" class="fixed left-0 top-0 hidden h-full w-full sm:block" />
    <div class="align-center absolute left-0 top-0 h-full w-full justify-center sm:flex">
      <router-view v-slot="{ Component }">
        <v-fade-transition leave-absolute>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </div>
  </div>
</template>
