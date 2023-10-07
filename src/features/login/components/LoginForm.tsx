import {
  Button,
  CircularProgress,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { CheckBox } from '@mui/icons-material'

import { LoginSchema, loginSchema } from '@/types.d'
import { useAuth, useForm } from '@/hooks'

interface Props {
  onSuccess: () => void
}
export const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const { register, handleSubmit, reset, isSubmitting } = useForm({ schema: loginSchema })
  const { login } = useAuth()

  const onSubmit = async (data: LoginSchema) => {
    await login(data)
    reset()
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
        <OutlinedInput
          id="email"
          {...register('email')}
          className="w-full py-0"
          type="email"
          autoFocus
          placeholder="name@work-email.com"
          autoComplete="username"
        />
      </div>
      <div className="w-full">
        <InputLabel className="text-black font-medium" htmlFor="password">
          Password
        </InputLabel>
        <OutlinedInput
          id="password"
          {...register('password')}
          className="w-full py-0"
          type="password"
          placeholder="Your Password"
          autoComplete="current-password"
        />
      </div>
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
        className="bg-slack text-white rounded-md w-full p-2 disabled:bg-slackLight"
      >
        {isSubmitting ? <CircularProgress size={24} className="text-green-500" /> : 'Sign in'}
      </Button>
      <FormControlLabel
        className="w-full text-gray-700 ml-2"
        control={<CheckBox color="primary" />}
        label="Remember me on this device"
      />
    </form>
  )
}
