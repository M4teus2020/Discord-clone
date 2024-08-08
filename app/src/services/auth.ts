import type { AuthResponse, Credentials, User } from '@/interfaces/auth'
import api from './api'

export default {
  async register(user: User) {
    return await api.post<AuthResponse>('/register', user)
  },
  async login(credentials: Credentials) {
    return await api.post<AuthResponse>('/login', credentials)
  },
  async user() {
    return await api.get<User>('/user')
  },
}
