<template>
  <div>
    <!-- TOPBAR -->
    <div class="elevation-low h-12 py-2 px-4 flex align-center">
      <div class="flex align-center flex-grow h-full gap-2 text-[#80848e] overflow-auto scroll-none">
        <FriendsIcon class="w-6 h-full shrink-0" />
        <h1 class="text-[#f2f3f5] shrink-0">Amigos</h1>

        <v-divider vertical :thickness="2" class="!h-6 my-auto px-1 shrink-0"></v-divider>

        <div class="px-2 flex gap-4 shrink-0">
          <div
            class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white shrink-0"
          >
            Disponível
          </div>
          <div
            class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white shrink-0"
          >
            Todos
          </div>
          <div
            class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white shrink-0"
          >
            Pendente
          </div>
          <div
            class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white shrink-0"
          >
            Bloqueado
          </div>
          <div
            class="px-2 cursor-pointer rounded bg-[#248046] text-white active:bg-inherit active:!text-[#2dc770] shrink-0"
          >
            Adicionar amigo
          </div>
        </div>
      </div>
      <div class="flex gap-4 pl-2 shrink-0">
        <MessagePlusIcon />

        <v-divider vertical class="!h-6 my-auto"></v-divider>

        <BoxIcon />
        <HelpIcon />
      </div>
    </div>
    <!-- TOPBAR -->
    <div class="content w-full flex">
      <div class="flex-grow flex flex-col">
        <div class="item-container">
          <div class="flex bg-[#1e1f22] p-px rounded">
            <input class="px-2 h-8 flex-grow outline-none" placeholder="Buscar" />
            <div class="w-8 h-8 flex justify-center align-center shrink-0">
              <MagnifyingGlassIcon class="h-5 w-5" />
            </div>
          </div>
        </div>

        <div class="item-container">
          <h2 class="uppercase text-xs">Todos os amigos</h2>
        </div>

        <div class="mt-2 pb-2 overflow-auto black-scroll">
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

<script lang="ts">
import { BoxIcon, FriendsIcon, HelpIcon, MagnifyingGlassIcon, MessagePlusIcon } from '@/components/icons'
import { FriendListItemComponent } from './components'

export default {
  name: 'FriendsView',
  components: {
    BoxIcon,
    FriendsIcon,
    FriendListItemComponent,
    HelpIcon,
    MagnifyingGlassIcon,
    MessagePlusIcon
  }
}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 16px 20px 8px 30px;
}
.content {
  height: calc(100vh - 3rem);
}
</style>
