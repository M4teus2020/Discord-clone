<script setup lang="ts">
import { AvatarComponent, BtnActionComponent } from '@/components'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
</script>

<template>
  <div class="align-center flex h-[3.25rem] justify-between gap-2 bg-[#232428] px-[6px]">
    <!-- USER -->
    <div class="hover-showtag flex flex-grow gap-2 rounded-md py-1 pl-[2px] hover:bg-[#3d3e45]">
      <!-- AVATAR -->
      <AvatarComponent
        class="h-8 w-8"
        avatar-url="https://cdn.discordapp.com/avatars/208561912806506497/6cd59941edaa9eebb244407341d76731.webp?size=256"
        status="idle"
      />
      <!-- AVATAR -->

      <!-- NAME/TAG -->
      <div class="mt-[-2px]">
        <div class="text-sm text-white">{{ auth.user.name }}</div>
        <div class="h-4 overflow-hidden text-[11px]">
          <div class="status-tag relative top-0 transition-all">
            <div class="status">Disponível</div>
            <div class="tag">{{ auth.user.user }}</div>
          </div>
        </div>
      </div>
      <!-- NAME/TAG -->
    </div>
    <!-- USER -->

    <!-- ACTIONS -->
    <div class="flex">
      <BtnActionComponent icon="Mic" />
      <BtnActionComponent icon="HeadPhone" />
      <BtnActionComponent icon="Cog" @click="auth.logout()" />
    </div>
    <!-- ACTIONS -->
  </div>
</template>

<style lang="scss" scoped>
.hover-showtag:hover {
  .status-tag {
    top: -16px !important;
  }
}
</style>
