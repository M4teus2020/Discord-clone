<template>
    <div class="flex flex-grow">
        <SideBarComponent />

        <div class="w-full h-full">
            <!-- TOPBAR -->
            <div class="h-12 elevation-low"></div>
            <!-- TOPBAR -->

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SideBarComponent } from './components'

export default defineComponent({
    name: 'AppView',
    components: {
        SideBarComponent,
    }
})
</script>

<style lang="scss" scoped>
</style>
