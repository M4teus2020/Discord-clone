<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-grow overflow-y-auto black-scroll">
      <ul class="messages">
        <div class="h-6"></div>

        <div class="w-auto h-0 flex justify-center align-center border-t-[1px] border-[#3f4147] mb-0.5 mt-1.5 mx-4">
          <span class="text-xs text-[#949ba4] block bg-[#313338] p-1"> 27 de fevereiro de 2024 </span>
        </div>
        <li class="flex align-center mt-4 px-4">
          <img
            src="https://cdn.discordapp.com/avatars/208561912806506497/6cd59941edaa9eebb244407341d76731.webp?size=100"
            aria-hidden="true"
            class="rounded-full h-10 w-10 mr-4"
            alt=" "
          />
          <div class="text-[#dbdee1]">
            <h3>
              <span class="font-medium"> Felini </span>
              <span>
                <time
                  aria-label="27 de fevereiro de 2024 às 22:32"
                  datetime="2024-02-28T01:32:53.898Z"
                  class="text-xs text-[#949ba4] ml-1"
                >
                  27/02/2024 22:32
                </time>
              </span>
            </h3>
            <p>é oque?</p>
          </div>
        </li>
        <li class="flex align-center px-4">
          <span class="w-14 text-xs flex justify-end align-center pr-4">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="hidden show-hover"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>como é a historia? kkkk</p>
          </div>
        </li>
        <li class="flex align-center mt-4 px-4">
          <img
            src="https://cdn.discordapp.com/avatars/216391120727441410/1561594fb37658db07ae3c0bc59a0090.webp?size=100"
            aria-hidden="true"
            class="rounded-full h-10 w-10 mr-4"
            alt=" "
          />
          <div class="text-[#dbdee1]">
            <h3>
              <span class="font-medium"> ZH </span>
              <span>
                <time
                  aria-label="27 de fevereiro de 2024 às 22:32"
                  datetime="2024-02-28T01:32:53.898Z"
                  class="text-xs text-[#949ba4] ml-1"
                >
                  27/02/2024 22:32
                </time>
              </span>
            </h3>
            <p>runan ta aplicando em 3 alvos ate em melee</p>
          </div>
        </li>
        <li class="flex align-center px-4">
          <span class="w-14 text-xs flex justify-end align-center pr-4">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="hidden show-hover"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>seju ta dando o stun em 3</p>
          </div>
        </li>
        <li class="flex align-center px-4">
          <span class="w-14 text-xs flex justify-end align-center pr-4">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="hidden show-hover"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>o Q do gp tbnm</p>
          </div>
        </li>
        <li class="flex align-center px-4">
          <span class="w-14 text-xs flex justify-end align-center pr-4">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="hidden show-hover"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>ate o tentaculo da illoi bate em 3 no W</p>
          </div>
        </li>
        <li class="flex align-center px-4">
          <span class="w-14 text-xs flex justify-end align-center pr-4">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="hidden show-hover"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>nao duvido nada do nassus</p>
          </div>
        </li>
        <div class="h-6"></div>
      </ul>
    </div>

    <form class="bg-[#383a40] flex align-center gap-4 px-4 mx-4 mb-6 h-11 rounded-lg shrink-0">
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
  --emoji-position: calc(-1 * var(--emoji-col) * var(--emoji-size)) calc(-1 * var(--emoji-row) * var(--emoji-size));

  --emoji-bg-size: calc(20 * var(--emoji-size)) calc(4 * var(--emoji-size));

  -webkit-mask-image: url(@/assets/emojis.png);
  mask-image: url(@/assets/emojis.png);
  -webkit-mask-position: var(--emoji-position);
  mask-position: var(--emoji-position);
  -webkit-mask-size: var(--emoji-bg-size);
  mask-size: var(--emoji-bg-size);
  background-color: #a8a8aa;
}

.messages li:hover {
  background-color: #2e3035;
  .show-hover {
    display: block;
  }
}
</style>
