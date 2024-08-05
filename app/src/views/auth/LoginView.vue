<script setup lang="ts">
import { userAppStore } from '@/stores/User'
import { InputComponent } from '@/components'
import QRCode from './components/QRCode.vue'
import { useRouter } from 'vue-router'
import DiscordLogo from '@/assets/logo.svg'

const dataUserAppStore = userAppStore()
const router = useRouter()

async function submitLogin(): Promise<void> {
  const response = await dataUserAppStore.login()
  const token = dataUserAppStore.token

  if (response && token !== null) {
    router.push({ path: '/' })
  }
}
</script>

<template>
  <VForm class="bg-discord-dark p-4 sm:p-8 w-full sm:w-min rounded-lg lg:flex gap-[64px]">
    <!-- FORM DIV -->
    <div class="flex flex-col justify-center align-center z-20 sm:w-[414px]">
      <img :src="DiscordLogo" alt="Discord logo" class="mb-4 sm:hidden" />
      <div class="text-center">
        <h1 class="mb-1 text-2xl text-white font-medium tracking-wide">Boas-vindas de volta!</h1>
        <p class="font-2xl">Estamos muito animados em te ver novamente!</p>
      </div>

      <div class="w-full mt-5 space-y-4">
        <InputComponent label="E-mail" type="email" name="email" required />

        <InputComponent label="Senha" type="password" name="password" required />

        <p>
          <a href="" class="text-discord-link">Esqueceu sua senha?</a>
        </p>

        <VBtn class="w-full py-0.5" color="#5865f2" height="44px" @click="submitLogin">
          <span class="capitalize text-base tracking-normal"> Entrar </span>
        </VBtn>

        <p>
          Precisando de uma conta?
          <router-link :to="{ name: 'register' }" class="text-discord-link">Registre-se</router-link>
        </p>
      </div>
    </div>
    <!-- FORM DIV -->

    <!-- QRCODE -->
    <div class="hidden lg:block w-[240px] h-[344px]">
      <div class="h-full flex flex-col justify-center align-center">
        <div class="p-2 mb-8 rounded-lg bg-discord-lightest">
          <QRCode />
        </div>
        <h2 class="text-2xl text-discord-lightest mb-2">Entrar com código QR</h2>
        <div class="text-center leading-5 ">
          Escaneie isto com o
          <strong>app móvel do Discord</strong> para fazer login imediatamente.
        </div>
      </div>
    </div>
    <!-- QRCODE -->
  </VForm>
</template>
