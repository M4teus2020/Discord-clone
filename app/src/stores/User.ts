import { defineStore } from 'pinia'
export const userAppStore = defineStore('user', {
  state: () => ({
    token: null as string | null,
    userData: {}
  }),
  actions: {
    async login() {
      this.token = 'token'
      localStorage.setItem('token', this.token)
      return true
    },
    async logout() {
      if (this.token) {
        this.unsetUser()
      }
    },
    unsetUser() {
      this.token = null
      this.userData = {}
      localStorage.clear()
    }
  }
})
