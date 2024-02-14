<template>
    <div>
        <!-- TOPBAR -->
        <div class="elevation-low h-12 py-2 px-4 flex align-center">
            <div class="flex align-center h-full w-full gap-2 text-[#80848e]">
                <FriendsIcon class="w-6 h-full" />
                <h1 class="text-[#f2f3f5]">Amigos</h1>

                <v-divider vertical :thickness="2" class="!h-6 my-auto px-1"></v-divider>

                <div class="px-2 flex gap-4">
                    <div
                        class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
                    >
                        Disponível
                    </div>
                    <div
                        class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
                    >
                        Todos
                    </div>
                    <div
                        class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
                    >
                        Pendente
                    </div>
                    <div
                        class="px-2 cursor-pointer rounded hover:bg-[#393c41] hover:text-[#dbdee1] active:!bg-[#3f4147] active:text-white"
                    >
                        Bloqueado
                    </div>
                    <div
                        class="px-2 cursor-pointer rounded bg-[#248046] text-white active:bg-inherit active:!text-[#2dc770]"
                    >
                        Adicionar amigo
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <MessagePlusIcon />

                <v-divider vertical class="!h-6 my-auto"></v-divider>

                <BoxIcon />
                <HelpIcon />
            </div>
        </div>
        <!-- TOPBAR -->
    </div>
</template>

<script lang="ts">
import { BoxIcon, FriendsIcon, HelpIcon, MessagePlusIcon } from '@/components/icons'

export default {
    name: 'FriendsView',
    components: {
        FriendsIcon,
        BoxIcon,
        HelpIcon,
        MessagePlusIcon
    }
}
</script>
