<template>
    <div class="w-60 h-full bg-[#2b2d31] flex flex-col shrink-0">
        <TopBarComponent />

        <!-- PRIVATE CHANNELS -->
        <div class="grow p-2">
            <ul>
                <PrivateChannelItemComponent icon="Friends" text="Amigos"/>
                <PrivateChannelItemComponent icon="Nitro" text="Nitro"/>
                <PrivateChannelItemComponent icon="MessageRequests" text="Solicitações de mensagens"/>
                <PrivateChannelItemComponent icon="Store" text="Loja"/>
            </ul>
        </div>
        <!-- PRIVATE CHANNELS -->

        <BottomBarComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { PrivateChannelItemComponent } from '@/components'
import { BottomBarComponent, TopBarComponent } from './index'

export default defineComponent({
    name: 'SideBarComponent',
    components: {
        BottomBarComponent,
        PrivateChannelItemComponent,
        TopBarComponent,
    }
})
</script>