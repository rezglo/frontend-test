export interface Message {
  id?: string
  type: 'channel' | 'user'
  typeId: string
  user: string
  text: string
  unixTime: number
}
