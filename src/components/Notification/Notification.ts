import { toast } from 'sonner'

export const Notification = {
  success(message: string) {
    toast.success(message)
  },

  error(message: string) {
    toast.error(message)
  },
}
