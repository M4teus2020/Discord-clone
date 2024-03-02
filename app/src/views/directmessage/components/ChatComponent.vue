<template>
    <div class="h-full w-full flex flex-col">
        <div class="flex-grow">
            

        </div>

        <form class="bg-[#383a40] flex align-center gap-4 px-4 mx-4 mb-6 h-11 rounded-lg">
            <CirclePlusIcon />
            <input
                class="flex-grow h-full !border-none outline-none"
                name="message"
                placeholder="Digite uma mensagem"
                type="text"
                autocomplete="off"
            />
            <GifIcon />
            <StickerIcon />
            <div class="emoji h-6 w-6"></div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { CirclePlusIcon, GifIcon, StickerIcon } from '@/components/icons'

export default defineComponent({
    name: 'ChatComponent',
    components: {
        CirclePlusIcon,
        GifIcon,
        StickerIcon
    }
})
</script>

<style lang="scss" scoped>
.emoji {
    --emoji-size: 24px;
    --emoji-row: 3;
    --emoji-col: 0;
    --emoji-bg-position: calc(-1 * var(--emoji-col) * var(--emoji-size))
        calc(-1 * var(--emoji-row) * var(--emoji-size));

    --emoji-bg-size: calc(20 * var(--emoji-size))
        calc(4 * var(--emoji-size));

    -webkit-mask-image: url(@/assets/emojis.png);
    mask-image: url(@/assets/emojis.png);
    -webkit-mask-position: var(--emoji-bg-position);
    mask-position: var(--emoji-bg-position);
    -webkit-mask-size: var(--emoji-bg-size);
    mask-size: var(--emoji-bg-size);
    background-color: #a8a8aa;
}
</style>
