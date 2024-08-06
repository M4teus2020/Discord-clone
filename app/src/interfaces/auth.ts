export interface RegistrationUser {
  email: string
  name: string
  user: string
  password: string
  birthdate: string
}

export interface User extends RegistrationUser {
  id: number
}

export interface Credentials {
  email: string
  password: string
}


export interface AuthResponse {
  token: string
  user: User
}
