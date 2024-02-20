<template>
    <li
        :class="`mb-0.5 px-2 py-1.5 w-full rounded hover:bg-[#35373c] hover:text-[#dbdee1] flex align-center gap-3 ${isActive ? 'bg-[#3f4147] text-white' : ''}`"
        @click="$router.push(path)"
    >
        <div class="flex justify-center align-center w-8 h-8 shrink-0">
            <component v-if="icon" :is="iconComponent" class="w-6 h-6" />
            <AvatarComponent
                v-if="typeof user == 'object'"
                :avatar-url="user.avatarUrl"
                :status="user.status"
                class="w-8 h-8"
            />
        </div>
        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {{ text }}
        </span>
    </li>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { AvatarComponent } from '@/components'

export default defineComponent({
    name: 'SideBarItemComponent',
    components: {
        AvatarComponent,
        RouterLink
    },
    props: {
        icon: {
            type: [String, Boolean],
            required: false,
            default: false
        },
        text: {
            type: String,
            required: true,
            default: ''
        },
        user: {
            type: [Object, Boolean],
            required: false,
            default: false
        },
        path: {
            type: String,
            required: true
        }
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(
                () => import(`../../../components/icons/${this.icon}Icon.vue`)
            )
        },
        isActive() {
            return this.$route.path === this.path
        }
    }
})
</script>
