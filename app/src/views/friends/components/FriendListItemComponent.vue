<script setup lang="ts">
import { DotsIcon, MessageIcon } from '@/components/icons'
import { AvatarComponent } from '@/components'
</script>

<template>
  <div
    class="friend-item align-center ml-[30px] mr-5 flex h-[62px] justify-between border-t-[0.8px] border-[#3f4147] hover:!ml-5 hover:!mr-2.5 hover:rounded-lg hover:bg-[#393c41] hover:px-2.5"
  >
    <div class="align-center flex h-10 overflow-hidden text-nowrap">
      <AvatarComponent
        avatar-url="https://cdn.discordapp.com/avatars/1092414061574107146/3c6b4cc495f98246ce165747d154bc08.webp?size=40"
        class="mr-3 h-8 w-8"
      />

      <div class="text-sm leading-4">
        <div>
          <span class="text-base text-[#F2F3F5]">Mateus Felini</span><span class="ml-1.5 hidden">matfelini</span>
        </div>
        <span>Offline</span>
      </div>
    </div>
    <div class="flex shrink-0 gap-2">
      <div
        class="button align-center flex h-9 w-9 cursor-pointer justify-center rounded-full bg-[#2b2d31] text-[#b5bac1]"
      >
        <MessageIcon class="h-5 w-5" />
      </div>
      <div
        class="button align-center flex h-9 w-9 cursor-pointer justify-center rounded-full bg-[#2b2d31] text-[#b5bac1]"
      >
        <DotsIcon class="h-5 w-5" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.friend-item {
  &:hover .button {
    background-color: #1e1f22;

    &:hover {
      color: #dadde0;
    }
  }
}
</style>
