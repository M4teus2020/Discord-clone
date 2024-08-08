<script setup lang="ts">
import { NavItemComponent } from '@/components'
</script>

<template>
  <ul class="align-center scroll-none flex h-full w-[4.5rem] flex-col gap-2 overflow-auto bg-[#1e1f22] p-3">
    <!-- DM -->
    <NavItemComponent
      path="/@me"
      icon-class="bg-[#313338] text-[#dbdee1] hover:bg-[#5865f2] hover:text-[#ffffff]"
      icon-class-active="bg-[#5865f2] text-[#ffffff]"
      icon="Discord"
    />

    <v-divider :thickness="2" class="w-8"></v-divider>

    <!-- SERVERS -->
    <NavItemComponent path="/channel/1">
      <img
        src="https://cdn.discordapp.com/icons/766449757706125392/fdd1c66b1547e0ad7036080d5e1cebbe.webp?size=96"
        alt=" "
        width="48"
        height="48"
        aria-hidden="true"
      />
    </NavItemComponent>
    <NavItemComponent path="/channel/2" :notification="true" :notification-count="1">
      <img
        src="https://cdn.discordapp.com/icons/1078660903450464286/3dbf2e99be66e0c2655492c499b6fabd.webp?size=96"
        alt=" "
        width="48"
        height="48"
        aria-hidden="true"
      />
    </NavItemComponent>
    <!-- SERVERS -->

    <!-- ADD SERVER -->
    <NavItemComponent
      icon-class="bg-[#313338] text-[#23a559] hover:bg-[#23a559] hover:text-[#ffffff]"
      icon="Plus"
      :pill="false"
    />

    <!-- EXPLORE -->
    <NavItemComponent
      path="/explore"
      icon-class="bg-[#313338] text-[#23a559] hover:bg-[#23a559] hover:text-[#ffffff]"
      icon-class-active="bg-[#23a559] text-[#ffffff]"
      icon="Compass"
    />
  </ul>
</template>
