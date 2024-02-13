<template>
    <div class="w-60 h-full bg-[#2b2d31] flex flex-col shrink-0">
        <TopBarComponent />

        <!-- PRIVATE CHANNELS -->
        <div class="grow p-2">
            <ul>
                <PrivateChannelItemComponent
                    v-for="menu in menuChannels"
                    :key="menu.id"
                    :text="menu.text"
                    :icon="menu.icon"
                    :path="menu.path"
                />

                <h2
                    class="flex align-center justify-between p-3 pb-0.5 text-xs uppercase hover:text-[#dbdee1]"
                >
                    <span>Mensagens diretas</span>
                    <div class="invite-btn">
                        <PlusIcon class="w-4" />
                    </div>
                </h2>

                <PrivateChannelItemComponent
                    v-for="dm in dmChannels"
                    :key="dm.id"
                    :text="dm.username"
                    :user="dm"
                    :path="`/@me/${dm.id}`"
                />
            </ul>
        </div>
        <!-- PRIVATE CHANNELS -->

        <BottomBarComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { BottomBarComponent, PrivateChannelItemComponent, TopBarComponent } from './index'
import { PlusIcon } from '@/components/icons'

export default defineComponent({
    name: 'SideBarComponent',
    components: {
        BottomBarComponent,
        PrivateChannelItemComponent,
        TopBarComponent,
        PlusIcon
    },
    data() {
        return {
            menuChannels: [
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
            ],
            dmChannels: [
                {
                    id: 1,
                    username: 'Mateus Felini',
                    avatarUrl:
                        'https://cdn.discordapp.com/avatars/1092414061574107146/3c6b4cc495f98246ce165747d154bc08.webp?size=40',
                    status: 'online'
                },
                {
                    id: 2,
                    username: 'Nykcolas',
                    avatarUrl:
                        'https://cdn.discordapp.com/avatars/408305144485249025/b8afb1519d6278e43e412bce13120793.webp?size=40',
                    status: 'idle'
                },
                {
                    id: 3,
                    username: 'Andrew',
                    avatarUrl:
                        'https://cdn.discordapp.com/avatars/434022170239434753/1726266d029550e32004359dc112688c.webp?size=40',
                    status: 'offline'
                },
                {
                    id: 4,
                    username: 'virtinho de bangu',
                    avatarUrl:
                        'https://cdn.discordapp.com/avatars/607722408295792640/4846caacc422a489058d0c1c5c0977d0.webp?size=40',
                    status: 'occupied'
                }
            ]
        }
    }
})
</script>
