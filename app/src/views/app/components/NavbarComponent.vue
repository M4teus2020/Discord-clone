<template>
    <ul
        class="w-[4.5rem] bg-[#1e1f22] h-full flex flex-col align-center p-3 gap-2 overflow-auto scroll-none"
    >
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

<script lang="ts">
import { defineComponent } from 'vue'
import { NavItemComponent } from '@/components'

export default defineComponent({
    name: 'NavbarComponent',
    components: {
        NavItemComponent
    }
})
</script>
