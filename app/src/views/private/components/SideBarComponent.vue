<script setup lang="ts">
import { BottomBarComponent, SideBarItemComponent, TopBarComponent } from './index'
import { PlusIcon } from '@/components/icons'

const menuChannels = [
  {
    id: 1,
    icon: 'Friends',
    text: 'Amigos',
    path: '/@me'
  },
  {
    id: 2,
    icon: 'Nitro',
    text: 'Nitro',
    path: '/nitro'
  },
  {
    id: 3,
    icon: 'MessageRequests',
    text: 'Solicitações de mensagens',
    path: '/message-requests'
  },
  {
    id: 4,
    icon: 'Store',
    text: 'Loja',
    path: '/store'
  }
]
const dmChannels = [
  {
    id: 1,
    username: 'Mateus Felini',
    avatarUrl: 'https://cdn.discordapp.com/avatars/1092414061574107146/3c6b4cc495f98246ce165747d154bc08.webp?size=40',
    status: 'online'
  },
  {
    id: 2,
    username: 'Nykcolas',
    avatarUrl: 'https://cdn.discordapp.com/avatars/408305144485249025/b8afb1519d6278e43e412bce13120793.webp?size=40',
    status: 'idle'
  },
  {
    id: 3,
    username: 'Andrew',
    avatarUrl: 'https://cdn.discordapp.com/avatars/434022170239434753/1726266d029550e32004359dc112688c.webp?size=40',
    status: 'offline'
  },
  {
    id: 4,
    username: 'virtinho de bangu',
    avatarUrl: 'https://cdn.discordapp.com/avatars/607722408295792640/4846caacc422a489058d0c1c5c0977d0.webp?size=40',
    status: 'occupied'
  }
]
</script>

<template>
  <div class="flex h-full w-60 shrink-0 flex-col bg-[#2b2d31]">
    <TopBarComponent class="shrink-0" />

    <!-- PRIVATE CHANNELS -->
    <div class="black-scroll grow overflow-y-scroll p-2">
      <ul>
        <SideBarItemComponent
          v-for="menu in menuChannels"
          :key="menu.id"
          :text="menu.text"
          :icon="menu.icon"
          :path="menu.path"
        />

        <h2 class="align-center flex justify-between p-3 pb-0.5 text-xs uppercase hover:text-[#dbdee1]">
          <span>Mensagens diretas</span>
          <div class="invite-btn">
            <PlusIcon class="w-4" />
          </div>
        </h2>

        <SideBarItemComponent
          v-for="dm in dmChannels"
          :key="dm.id"
          :text="dm.username"
          :user="dm"
          :path="`/@me/${dm.id}`"
        />
      </ul>
    </div>
    <!-- PRIVATE CHANNELS -->

    <BottomBarComponent class="shrink-0" />
  </div>
</template>

<style lang="scss" scoped>
.black-scroll {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  padding-right: 0px;

  &:hover {
    scrollbar-color: #1a1b1e #2b2d31 !important;
  }
}
</style>
