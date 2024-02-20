<template>
    <div
        class="friend-item h-[62px] ml-[30px] mr-5 hover:!ml-5 hover:!mr-2.5 hover:px-2.5 hover:rounded-lg border-t-[0.8px] border-[#3f4147] hover:bg-[#393c41] flex align-center justify-between"
    >
        <div class="h-10 flex align-center overflow-hidden text-nowrap">
            <AvatarComponent
                avatar-url="https://cdn.discordapp.com/avatars/1092414061574107146/3c6b4cc495f98246ce165747d154bc08.webp?size=40"
                class="w-8 h-8 mr-3"
            />

            <div class="text-sm leading-4">
                <div>
                    <span class="text-base text-[#F2F3F5]">Mateus Felini</span
                    ><span class="ml-1.5 hidden">matfelini</span>
                </div>
                <span>Offline</span>
            </div>
        </div>
        <div class="flex gap-2 shrink-0">
            <div
                class="button rounded-full bg-[#2b2d31] text-[#b5bac1] w-9 h-9 flex justify-center align-center cursor-pointer"
            >
                <MessageIcon class="w-5 h-5" />
            </div>
            <div
                class="button rounded-full bg-[#2b2d31] text-[#b5bac1] w-9 h-9 flex justify-center align-center cursor-pointer"
            >
                <DotsIcon class="w-5 h-5" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { DotsIcon, MessageIcon } from '@/components/icons'
import { AvatarComponent } from '@/components'

export default {
    name: 'FriendListItemComponent',
    components: {
        AvatarComponent,
        DotsIcon,
        MessageIcon
    }
}
</script>

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
