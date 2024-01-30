export const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(ms))
  })
}

export const getUserMessage = (message, authUser) => {
  return message.to.id !== authUser.id ? message.to : message.from
}
