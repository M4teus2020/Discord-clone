<template>
    <div class="flex flex-grow">
        <SideBarComponent />

        <RouterView class="w-full h-full" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { SideBarComponent } from './components'

export default defineComponent({
    name: 'AppView',
    components: {
        SideBarComponent,
        RouterView
    }
})
</script>

<style lang="scss" scoped></style>
