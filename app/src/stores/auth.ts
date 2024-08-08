import type { AuthResponse, User } from '@/interfaces/auth'
import router from '@/router'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import auth from '@/services/auth'

export const useAuth = defineStore('auth', () => {
  const token = useLocalStorage<string | null>('token', null)
  const user = ref<User | null>(null)

  function login(authData: AuthResponse) {
    token.value = authData.token
    user.value = authData.user

    router.push({ name: 'app' })
  }

  function logout() {
    token.value = null
    user.value = null

    router.push({ name: 'auth' })
  }

  async function isAuth() {
    if (!token.value) return false

    try {
      const { data: userData } = await auth.user()
      user.value = userData

      return true
    } catch (error) {
      logout()

      return false
    }
  }

  return {
    token,
    user,
    login,
    logout,
    isAuth
  }
})
