<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { InputComponent, CheckboxComponent } from '@/components'
import { VBtn, VForm } from 'vuetify/components'
import DiscordLogo from '@/assets/logo.svg'
import type { AuthResponse, RegistrationUser } from '@/interfaces/auth'
import { useCRUD } from '@/composables/useCRUD'

const auth = useAuth()

const crud = useCRUD<RegistrationUser, AuthResponse>('/register')
crud.setForm({
  email: 'mfelini7@gmail.com',
  name: 'Mateus Felini',
  user: 'matfelini',
  password: '12345678',
  birthdate: '2003-07-30'
})

async function submit(): Promise<void> {
  try {
    const response = await crud.create()

    auth.login(response)
  } catch (error: any) {
    if (error.response && error.response.status === 422) return

    console.error('Register Error:', error)
  }
}
</script>

<template>
  <VForm class="bg-discord-dark p-4 sm:p-8 w-full sm:w-min rounded-lg lg:flex gap-[64px]" @submit.prevent="submit">
    <div class="flex flex-col justify-center align-center z-20 sm:w-[414px]">
      <img :src="DiscordLogo" alt="Discord logo" class="mb-4 sm:hidden" />
      <div class="text-center">
        <h1 class="mb-1 text-2xl text-discord-lightest font-medium tracking-wide">Criar uma conta</h1>
      </div>

      <div class="w-full mt-5 space-y-4">
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          required
          v-model="crud.form.email"
          :error="crud.errors.email"
        />

        <InputComponent
          label="Nome Exibido"
          type="text"
          name="name"
          v-model="crud.form.name"
          :error="crud.errors.name"
        />

        <InputComponent
          label="Nome de usuário"
          type="text"
          name="user"
          required
          v-model="crud.form.user"
          :error="crud.errors.user"
        />

        <InputComponent
          label="Senha"
          type="password"
          name="password"
          required
          v-model="crud.form.password"
          :error="crud.errors.password"
        />

        <InputComponent
          label="Data de Nascimento"
          type="date"
          name="birthdate"
          required
          v-model="crud.form.birthdate"
          :error="crud.errors.birthdate"
        />

        <CheckboxComponent
          label="(Opcional) Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais. Você pode mudar isso a qualquer momento."
          name="newsletter"
          label-class="text-[10px]"
        />

        <VBtn class="w-full py-0.5" color="#5865f2" height="44px" type="submit" :loading="crud.isLoading">
          <span class="capitalize text-base tracking-normal"> Continuar </span>
        </VBtn>

        <p class="text-xs">
          Ao se registrar, você concorda com os
          <a class="text-discord-link" href="">termos de serviço</a>
          e a
          <a class="text-discord-link" href="">política de privacidade</a>
          do Discord.
        </p>

        <p class="mt-4">
          <router-link :to="{ name: 'login' }" class="text-discord-link">Já tem uma conta?</router-link>
        </p>
      </div>
    </div>
  </VForm>
</template>
