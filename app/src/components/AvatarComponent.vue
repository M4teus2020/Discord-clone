<template>
    <div class="relative shrink-0">
        <svg aria-hidden="true" class="h-full w-full">
            <foreignObject height="100%" width="100%" mask="url(#mask-avatar-status-cut)">
                <img :src="avatarUrl" alt=" " aria-hidden="true" class="w-full h-full" />
            </foreignObject>
        </svg>
        <div
            :class="`status-icon w-[10px] h-[10px] rounded-full absolute bottom-0 right-0 ${status}`"
        ></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AvatarComponent',
    props: {
        avatarUrl: {
            type: String,
            required: true,
            default: null
        },
        status: {
            type: String,
            required: false,
            default: 'offline'
        }
    }
})
</script>
<style lang="scss" scoped>
.status-icon {
    &.online {
        background: #23a55a;
    }

    &.idle {
        overflow: hidden;
        &:before {
            content: '';
            box-shadow: 0 0 0 99999px #f0b232;
            border-radius: 9999px;
            width: 8px;
            height: 8px;
            top: -1.5px;
            left: -1.5px;
            display: block;
            position: absolute;
        }
    }
    &.occupied {
        background: #f23f43;

        &:before {
            content: '';
            background: #2b2d31;
            border-radius: 9999px;
            width: 0.45rem;
            height: 0.15rem;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    &.offline {
        background: #7a7e88;

        &:before {
            content: '';
            background: #2b2d31;
            border-radius: 9999px;
            width: 0.3rem;
            height: 0.3rem;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
