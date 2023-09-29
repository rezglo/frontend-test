export type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface User {
  id: UUID
  username: string
  email: string
  password: string
  photo: string
}

export interface InputUser {
  email: string
  password: string
}
