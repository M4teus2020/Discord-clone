import type { AuthResponse, Credentials, User } from '@/interfaces/auth'
import api from './api'

export default {
  register(user: User) {
    return api.post<AuthResponse>('/register', user)
  },
  login(credentials: Credentials) {
    return api.post<AuthResponse>('/login', credentials)
  }
}
