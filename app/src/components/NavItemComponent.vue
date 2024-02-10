<template>
    <div class="nav-item relative">
        <div v-if="pill" :class="`pill absolute flex align-center h-full left-[-0.45rem] ${pillClass}`">
            <span :class="`transition-all block rounded-r-full bg-white ${notification ? 'w-1 h-2': 'w-0 h-0'}`"></span>
        </div>
        <div :class="`icon-item w-12 h-12 rounded-full hover:rounded-2xl transition-all flex justify-center align-center overflow-hidden ${iconClass}`">
            <component v-if="icon" :is="iconComponent" />
            <slot v-else></slot>
            <span v-if="notificationCount > 0" class="count-tag text-white bg-[#f23f42] text-xs text-center px-1.5 min-w-4 rounded-lg absolute bottom-0 right-0">
                {{ notificationCount }}
            </span>
        </div>
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
        iconClass: {
            type: String,
            required: false,
            default: '',
        },
        pill: {
            type: Boolean,
            required: false,
            default: true,
        },
        pillClass: {
            type: String,
            required: false,
            default: '',
        },
        notificationCount: {
            type: Number,
            required: false,
            default: 0,
        },
        notification: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(() => import(`./icons/${this.icon}Icon.vue`)) 
        },
    },
})
</script>
<style lang="scss" scoped>
.count-tag {
    box-shadow: 0 0 0px 4px #232428;
}

.nav-item {
    &:hover .pill span {
        width: 0.25rem !important;
        height: 1.25rem !important;
    }

    &:active .pill span {
        width: 0.25rem !important;
        height: 2.5rem !important;
    }
}
</style>