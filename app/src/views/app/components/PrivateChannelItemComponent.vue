<template>
    <li
        class="p-1.5 w-full rounded hover:bg-[#35373c] active:bg-[#3b3d44] flex align-center gap-3"
    >
        <div class="flex justify-center align-center w-8 h-8">
            <component :is="iconComponent" class="w-6 h-6" />
        </div>
        <span>{{ text }}</span>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icons from '@/components/icons'

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
            if (this.icon && Icons[this.icon]) {
                return Icons[this.icon]
            } else {
                return Icons.DefaultIcon
            }
        }
    }
})
</script>