export async function getAllUsers () {
  const res = await fetch('http://localhost:3000/users')
  const data = await res.json()
  return data
}
