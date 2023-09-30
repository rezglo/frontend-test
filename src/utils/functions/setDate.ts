import { formatDistance } from 'date-fns'

export function setDate (date: string) {
  const today = new Date()
  return formatDistance(new Date(date), today)
}
