import { useEffect } from 'react'
import { Notification } from '../components/Notification'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm as useReactHookForm } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = ({ schema }: { schema: any }) => {
  type TypeSchema = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useReactHookForm<TypeSchema>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (errors == null) return

    const objectMesagges = Object.entries(errors)

    objectMesagges.forEach(([, value]) => {
      Notification.error(value?.message as string)
    })
  }, [errors])

  return { register, handleSubmit, reset, isSubmitting }
}
