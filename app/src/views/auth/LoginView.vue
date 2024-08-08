<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { InputComponent } from '@/components'
import QRCode from './components/QRCode.vue'
import DiscordLogo from '@/assets/logo.svg'
import type { AuthResponse, Credentials } from '@/interfaces/auth'
import { useCRUD } from '@/composables/useCRUD'

const auth = useAuth()

const crud = useCRUD<Credentials, AuthResponse>('/login')
crud.setForm({
  email: 'mfelini7@gmail.com',
  password: '12345678'
})

async function submit(): Promise<void> {
  try {
    const response = await crud.create()

    auth.login(response)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response && error.response.status === 422) return

    console.error('Login Error:', error)
  }
}
</script>

<template>
  <VForm class="w-full gap-[64px] rounded-lg bg-discord-dark p-4 sm:w-min sm:p-8 lg:flex" @submit.prevent="submit">
    <!-- FORM DIV -->
    <div class="align-center z-20 flex flex-col justify-center sm:w-[414px]">
      <img :src="DiscordLogo" alt="Discord logo" class="mb-4 sm:hidden" />
      <div class="text-center">
        <h1 class="mb-1 text-2xl font-medium tracking-wide text-white">Boas-vindas de volta!</h1>
        <p class="font-2xl">Estamos muito animados em te ver novamente!</p>
      </div>

      <div class="mt-5 w-full space-y-4">
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          required
          v-model="crud.form.email"
          :error="crud.errors.email || crud.errorMessage"
        />

        <InputComponent
          label="Senha"
          type="password"
          name="password"
          required
          v-model="crud.form.password"
          :error="crud.errors.password || crud.errorMessage"
        />

        <p>
          <a href="" class="text-discord-link">Esqueceu sua senha?</a>
        </p>

        <VBtn class="w-full py-0.5" color="#5865f2" height="44px" type="submit" :loading="crud.isLoading">
          <span class="text-base capitalize tracking-normal"> Entrar </span>
        </VBtn>

        <p>
          Precisando de uma conta?
          <router-link :to="{ name: 'register' }" class="text-discord-link">Registre-se</router-link>
        </p>
      </div>
    </div>
    <!-- FORM DIV -->

    <!-- QRCODE -->
    <div class="hidden h-[344px] w-[240px] lg:block">
      <div class="align-center flex h-full flex-col justify-center">
        <div class="mb-8 rounded-lg bg-discord-lightest p-2">
          <QRCode />
        </div>
        <h2 class="mb-2 text-2xl text-discord-lightest">Entrar com código QR</h2>
        <div class="text-center leading-5">
          Escaneie isto com o
          <strong>app móvel do Discord</strong> para fazer login imediatamente.
        </div>
      </div>
    </div>
    <!-- QRCODE -->
  </VForm>
</template>
