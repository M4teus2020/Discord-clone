<script setup lang="ts">
import { AvatarComponent, BtnActionComponent } from '@/components'
import { useAuth } from '@/stores/auth';

const auth = useAuth()

</script>

<template>
  <div class="h-[3.25rem] bg-[#232428] px-[6px] flex gap-2 align-center justify-between">
    <!-- USER -->
    <div class="hover-showtag pl-[2px] py-1 rounded-md hover:bg-[#3d3e45] flex flex-grow gap-2">
      <!-- AVATAR -->
      <AvatarComponent
        class="w-8 h-8"
        avatar-url="https://cdn.discordapp.com/avatars/208561912806506497/6cd59941edaa9eebb244407341d76731.webp?size=256"
        status="idle"
      />
      <!-- AVATAR -->

      <!-- NAME/TAG -->
      <div class="mt-[-2px]">
        <div class="text-white text-sm">Felini</div>
        <div class="text-[11px] h-4 overflow-hidden">
          <div class="relative top-0 transition-all status-tag">
            <div class="status">Disponível</div>
            <div class="tag">matfelini</div>
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
    top: -16px;
  }
}
</style>
