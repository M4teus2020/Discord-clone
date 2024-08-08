<script setup lang="ts">
import { CirclePlusIcon, GifIcon, StickerIcon } from '@/components/icons'
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <div class="black-scroll flex-grow overflow-y-auto">
      <ul class="messages">
        <div class="h-6"></div>

        <div class="align-center mx-4 mb-0.5 mt-1.5 flex h-0 w-auto justify-center border-t-[1px] border-[#3f4147]">
          <span class="block bg-[#313338] p-1 text-xs text-[#949ba4]"> 27 de fevereiro de 2024 </span>
        </div>
        <li class="align-center mt-4 flex px-4">
          <img
            src="https://cdn.discordapp.com/avatars/208561912806506497/6cd59941edaa9eebb244407341d76731.webp?size=100"
            aria-hidden="true"
            class="mr-4 h-10 w-10 rounded-full"
            alt=" "
          />
          <div class="text-[#dbdee1]">
            <h3>
              <span class="font-medium"> Felini </span>
              <span>
                <time
                  aria-label="27 de fevereiro de 2024 às 22:32"
                  datetime="2024-02-28T01:32:53.898Z"
                  class="ml-1 text-xs text-[#949ba4]"
                >
                  27/02/2024 22:32
                </time>
              </span>
            </h3>
            <p>é oque?</p>
          </div>
        </li>
        <li class="align-center flex px-4">
          <span class="align-center flex w-14 justify-end pr-4 text-xs">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="show-hover hidden"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>como é a historia? kkkk</p>
          </div>
        </li>
        <li class="align-center mt-4 flex px-4">
          <img
            src="https://cdn.discordapp.com/avatars/216391120727441410/1561594fb37658db07ae3c0bc59a0090.webp?size=100"
            aria-hidden="true"
            class="mr-4 h-10 w-10 rounded-full"
            alt=" "
          />
          <div class="text-[#dbdee1]">
            <h3>
              <span class="font-medium"> ZH </span>
              <span>
                <time
                  aria-label="27 de fevereiro de 2024 às 22:32"
                  datetime="2024-02-28T01:32:53.898Z"
                  class="ml-1 text-xs text-[#949ba4]"
                >
                  27/02/2024 22:32
                </time>
              </span>
            </h3>
            <p>runan ta aplicando em 3 alvos ate em melee</p>
          </div>
        </li>
        <li class="align-center flex px-4">
          <span class="align-center flex w-14 justify-end pr-4 text-xs">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="show-hover hidden"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>seju ta dando o stun em 3</p>
          </div>
        </li>
        <li class="align-center flex px-4">
          <span class="align-center flex w-14 justify-end pr-4 text-xs">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="show-hover hidden"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>o Q do gp tbnm</p>
          </div>
        </li>
        <li class="align-center flex px-4">
          <span class="align-center flex w-14 justify-end pr-4 text-xs">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="show-hover hidden"
            >
              22:43
            </time>
          </span>
          <div class="text-[#dbdee1]">
            <p>ate o tentaculo da illoi bate em 3 no W</p>
          </div>
        </li>
        <li class="align-center flex px-4">
          <span class="align-center flex w-14 justify-end pr-4 text-xs">
            <time
              aria-label="27 de fevereiro de 2024 às 22:43"
              datetime="2024-02-28T01:43:41.316Z"
              class="show-hover hidden"
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

    <form class="align-center mx-4 mb-6 flex h-11 shrink-0 gap-4 rounded-lg bg-[#383a40] px-4">
      <CirclePlusIcon />
      <input
        class="h-full flex-grow !border-none outline-none"
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
