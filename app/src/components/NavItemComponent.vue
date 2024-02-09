<template>
    <div
        class="w-12 h-12 rounded-full hover:rounded-2xl transition-all flex justify-center align-center overflow-hidden"
    >
        <component v-if="icon" :is="iconComponent" />
        <slot v-else></slot>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
    name: 'NavItemComponent',
    props: {
        icon: {
            type: [String, Boolean],
            required: false,
            default: false,
        },
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(() => import(`./icons/${this.icon}Icon.vue`)) 
        },
    },
})
</script>