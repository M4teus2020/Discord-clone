<script setup lang="ts">
import { BoxIcon, FriendsIcon, HelpIcon, MagnifyingGlassIcon, MessagePlusIcon } from '@/components/icons'
import { FriendListItemComponent } from './components'
</script>

<template>
  <div>
    <!-- TOPBAR -->
    <div class="elevation-low align-center flex h-12 px-4 py-2">
      <div class="align-center scroll-none flex h-full flex-grow gap-2 overflow-auto text-[#80848e]">
        <FriendsIcon class="h-full w-6 shrink-0" />
        <h1 class="shrink-0 text-[#f2f3f5]">Amigos</h1>

        <v-divider vertical :thickness="2" class="my-auto !h-6 shrink-0 px-1"></v-divider>

        <div class="flex shrink-0 gap-4 px-2">
          <div
            class="shrink-0 cursor-pointer rounded px-2 hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
          >
            Disponível
          </div>
          <div
            class="shrink-0 cursor-pointer rounded px-2 hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
          >
            Todos
          </div>
          <div
            class="shrink-0 cursor-pointer rounded px-2 hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
          >
            Pendente
          </div>
          <div
            class="shrink-0 cursor-pointer rounded px-2 hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
          >
            Bloqueado
          </div>
          <div
            class="shrink-0 cursor-pointer rounded bg-[#248046] px-2 text-white active:bg-inherit active:!text-[#2dc770]"
          >
            Adicionar amigo
          </div>
        </div>
      </div>
      <div class="flex shrink-0 gap-4 pl-2">
        <MessagePlusIcon />

        <v-divider vertical class="my-auto !h-6"></v-divider>

        <BoxIcon />
        <HelpIcon />
      </div>
    </div>
    <!-- TOPBAR -->
    <div class="content flex w-full">
      <div class="flex flex-grow flex-col">
        <div class="item-container">
          <div class="flex rounded bg-[#1e1f22] p-px">
            <input class="h-8 flex-grow px-2 outline-none" placeholder="Buscar" />
            <div class="align-center flex h-8 w-8 shrink-0 justify-center">
              <MagnifyingGlassIcon class="h-5 w-5" />
            </div>
          </div>
        </div>

        <div class="item-container">
          <h2 class="text-xs uppercase">Todos os amigos</h2>
        </div>

        <div class="black-scroll mt-2 overflow-auto pb-2">
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
          <FriendListItemComponent />
        </div>
      </div>

      <!-- <div class="w-[360px] h-full border-l border-[#3f4147] p-4">
                <h2 class="mt-2 mb-4 text-xl text-[#f2f3f5]">Ativo agora</h2>
            </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-container {
  padding: 16px 20px 8px 30px;
}
.content {
  height: calc(100vh - 3rem);
}
</style>
