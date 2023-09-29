export async function getAllChannels () {
  const res = await fetch('http://localhost:3000/channels')
  const data = await res.json()
  return data
}
