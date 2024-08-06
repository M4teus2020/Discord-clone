import type { AuthResponse, User } from '@/interfaces/auth'
import router from '@/router'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))

  const user = ref<User | null>(null)

  function login(authData: AuthResponse) {
    token.value = authData.token
    user.value = authData.user

    localStorage.setItem('token', authData.token)
    router.push({ name: 'app' })
  }

  function logout() {
    token.value = null
    user.value = null

    localStorage.removeItem('token')
    router.push({ name: 'login' })
  }

  return {
    token,
    user,
    login,
    logout
  }
})