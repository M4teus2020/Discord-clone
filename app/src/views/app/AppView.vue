<template>
    <div class="flex w-full h-screen">
        <NavbarComponent />

        <!-- App -->
        <div class="flex flex-grow">
            <SideBarComponent />

            <ChatComponent />
        </div>
        <!-- App -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChatComponent, SideBarComponent, NavbarComponent } from './components'

export default defineComponent({
    name: 'AppView',
    components: {
        ChatComponent,
        NavbarComponent,
        SideBarComponent,
    }
})
</script>

<style lang="scss" scoped>
</style>
