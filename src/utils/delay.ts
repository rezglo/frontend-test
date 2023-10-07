export const delay = () => {
  return new Promise((resolver) =>
    setTimeout(() => {
      resolver('')
    }, 1000),
  )
}
