import { FormControlLabel, InputLabel, TextField } from '@mui/material'
import { CheckBox } from '@mui/icons-material'

import { useForm } from '@/hooks'
import { Button } from '@/components'
import { useUserStore } from '@/stores'
import { LoginSchema, loginSchema } from '@/schemas'

interface Props {
  onSuccess: () => void
}

export const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const { register, handleSubmit, isSubmitting } = useForm({ schema: loginSchema })
  const login = useUserStore((state) => state.login)

  const onSubmit = async (data: LoginSchema) => {
    await login(data)
    onSuccess()
  }

  return (
    <form
      noValidate
      className="flex justify-center items-center flex-col w-full gap-6 text-sm font-bold"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full ">
        <InputLabel className="text-black font-medium" htmlFor="email">
          Email
        </InputLabel>
        <TextField
          id="email"
          variant="outlined"
          {...register('email')}
          className="w-full py-0"
          type="email"
          autoFocus
          placeholder="name@work-email.com"
          autoComplete="email"
        />
      </div>
      <div className="w-full">
        <InputLabel className="text-black font-medium" htmlFor="password">
          Password
        </InputLabel>
        <TextField
          id="password"
          variant="outlined"
          {...register('password')}
          className="w-full py-0"
          type="password"
          placeholder="Your Password"
          autoComplete="current-password"
        />
      </div>
      <Button
        isLoading={isSubmitting}
        type="submit"
        className="bg-slack text-white rounded-md w-full p-2 disabled:bg-slackLight"
      >
        Sign in
      </Button>
      <FormControlLabel
        className="w-full text-gray-700 ml-2"
        control={<CheckBox color="primary" />}
        label="Remember me on this device"
      />
    </form>
  )
}
