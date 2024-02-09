<template>
    <li
        class="px-2 py-1.5 w-full rounded hover:bg-[#35373c] active:bg-[#3b3d44] flex align-center gap-3"
    >
        <div class="flex justify-center align-center w-8 h-8 shrink-0">
            <component v-if="icon" :is="iconComponent" class="w-6 h-6" />
            <slot v-else></slot>
        </div>
        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{ text }}</span>
    </li>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
    name: 'PrivateChannelItemComponent',
    props: {
        text: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        }
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(() => import(`./icons/${this.icon}Icon.vue`)) 
        },
    },
})
</script>