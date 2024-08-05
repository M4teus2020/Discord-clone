<script setup lang="ts">
import Background from '@/assets/login-background.svg'

</script>

<template>
  <div id="auth-layout">
    <img :src="Background" class="hidden sm:block w-full h-full fixed top-0 left-0" />
    <div class="absolute top-0 left-0 sm:flex justify-center align-center w-full h-full">
      <router-view v-slot="{ Component }">
        <v-fade-transition leave-absolute>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </div>
  </div>
</template>
