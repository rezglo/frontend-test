export interface Message {
  id?: number
  type: 'channel' | 'person'
  typeId: string
  user: string
  text: string
  unixTime: number
}
