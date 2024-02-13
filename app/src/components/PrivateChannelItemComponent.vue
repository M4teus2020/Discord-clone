<template>
    <li
        class="px-2 py-1.5 w-full rounded hover:bg-[#35373c] hover:text-[#dbdee1] active:bg-[#3b3d44] active:text-white flex align-center gap-3"
    >
        <div class="flex justify-center align-center w-8 h-8 shrink-0">
            <component v-if="data.icon" :is="iconComponent" class="w-6 h-6" />
            <AvatarComponent
                v-if="data.avatarUrl"
                :avatar-url="data.avatarUrl"
                :status="data.status"
                class="w-8 h-8"
            />
        </div>
        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{
            data?.text ?? data?.username
        }}</span>
    </li>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { AvatarComponent } from '@/components'

export default defineComponent({
    name: 'PrivateChannelItemComponent',
    components: {
        AvatarComponent
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(() => import(`./icons/${this.data.icon}Icon.vue`))
        }
    }
})
</script>
