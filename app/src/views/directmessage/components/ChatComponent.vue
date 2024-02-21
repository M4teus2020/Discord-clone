<template>
    <div class="h-full w-full">
        <div></div>

        <v-form>
            <v-text-field
                name="message"
                placeholder="Digite uma mensagem"
                variant="outlined"
                type="text"
                hide-details="auto"
                density="compact"
            >
                <template #prepend>
                    <CirclePlusIcon />
                </template>
                <template #append>
                    <GifIcon />
                    <StickerIcon />
                    <div class="emoji h-6 w-6"></div>
                </template>
            </v-text-field>
        </v-form>
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
    --custom-emoji-sprite-size: 24px;
    --custom-emoji-sprite-row: 3;
    --custom-emoji-sprite-col: 0;
    --custom-emoji-sprite-bg-position: calc(
            -1 * var(--custom-emoji-sprite-col) * var(--custom-emoji-sprite-size)
        )
        calc(-1 * var(--custom-emoji-sprite-row) * var(--custom-emoji-sprite-size));

    --custom-emoji-sprite-bg-size: calc(20 * var(--custom-emoji-sprite-size))
        calc(4 * var(--custom-emoji-sprite-size));

    -webkit-mask-image: url(@/assets/emojis.png);
    mask-image: url(@/assets/emojis.png);
    -webkit-mask-position: var(--custom-emoji-sprite-bg-position);
    mask-position: var(--custom-emoji-sprite-bg-position);
    -webkit-mask-size: var(--custom-emoji-sprite-bg-size);
    mask-size: var(--custom-emoji-sprite-bg-size);
    background-color: #a8a8aa;
}
</style>
