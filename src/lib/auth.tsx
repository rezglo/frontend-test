import { storage } from '@/utils/storage'

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser()
    return data
  }
  return null
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data)
  const user = await handleUserResponse(response)
  return user
}

// async function registerFn(data: RegisterCredentialsDTO) {
//   const response = await registerWithEmailAndPassword(data)
//   const user = await handleUserResponse(response)
//   return user
// }

async function logoutFn() {
  storage.removeToken()
  window.location.assign(window.location.origin as unknown as string)
}
