<script setup lang="ts">
import { userAppStore } from '@/stores/User'
import { InputComponent, CheckboxComponent } from '@/components'
import { useRouter } from 'vue-router'
import { VBtn, VForm } from 'vuetify/components'
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
    <div class="flex flex-col justify-center align-center z-20 sm:w-[414px]">
      <img :src="DiscordLogo" alt="Discord logo" class="mb-4 sm:hidden" />
      <div class="text-center">
        <h1 class="mb-1 text-2xl text-discord-lightest font-medium tracking-wide">Criar uma conta</h1>
      </div>

      <div class="w-full mt-5 space-y-4">
        <InputComponent label="E-mail" type="email" name="email" required />

        <InputComponent label="Nome Exibido" type="text" name="name" />

        <InputComponent label="Nome de usuário" type="text" name="username" required />

        <InputComponent label="Senha" type="password" name="password" required />

        <InputComponent label="Data de Nascimento" type="date" name="birthday" required />

        <CheckboxComponent
          label="(Opcional) Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais. Você pode mudar isso a qualquer momento."
          name="newsletter"
          label-class="text-[10px]"
        />

        <VBtn class="w-full py-0.5" color="#5865f2" height="44px" @click="submitLogin">
          <span class="capitalize text-base tracking-normal"> Continuar </span>
        </VBtn>

        <p class="text-xs">
          Ao se registrar, você concorda com os
          <a class="text-discord-link" href="">termos de serviço</a>
          e a
          <a class="text-discord-link" href="">política de privacidade</a>
          do Discord.
        </p>

        <p class="mt-3">
          <router-link :to="{ name: 'login' }" class="text-discord-link">Já tem uma conta?</router-link>
        </p>
      </div>
    </div>
  </VForm>
</template>
