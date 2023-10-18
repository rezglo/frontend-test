export interface AuthUser {
  id: string
  name: string
  avatar: string
}

export type UserResponse = {
  jwt: string
  user: AuthUser
}
