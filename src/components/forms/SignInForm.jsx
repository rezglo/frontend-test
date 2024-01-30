import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/hooks/customReduxHooks'
import LoginInput from '../inputs/LoginInput'
import SignInButton from '@/components/buttons/signInButton'
import { useLoginMutation } from '@/features/api/apiSlice'
import { setAuthData } from '@/features/authentication/authenticationSlice'

function SignInForm() {
  const fomInputs =[
    {
      id: 'email-input',
      name: 'email',
      type: 'text',
      label: 'Email address',
      placeholder: 'name@work-email.com',
      validationRules: {
        required: 'Email address is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      }
    },
    {
      id: 'password-input',
      name: 'password',
      type: 'Password',
      label: 'Password',
      placeholder: 'Your password',
      validationRules: {
        required: 'Password is required'
      }
    }
  ]

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login, { isLoading, isError } ] = useLoginMutation()
  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onTouched'
  })

  const onSubmit = async (formData) => {
    // - Sending the form data to the server
    const responseData = await login(formData)

    if (responseData.error) {
      let message = ''

      if (responseData.error.data === 'Network Error') {
        message = 'Please check your network connection and try again'
      } else if(responseData.error.status === 401) {
        message = 'Invalid credentials'
      } else {
        message = 'Error sending data, please try again'
      }

      setErrorMessage(message)

      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    } else {
      if (responseData.data) {
        dispatch(setAuthData({ data: responseData.data, actionType: 'SET_TOKEN_FROM_PAYLOAD' }))
        navigate('/')
      }
    }
  }

  return (
    <div className="w-full">
      <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <div id="sign-in-form-body" className="mb-8">
          {fomInputs.map((input) => (
            <LoginInput
              key={input.id}
              id={input.name}
              name={input.name}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              errors={errors}
              validations={register(input.name, { ...input.validationRules })}
            />
          ))}

          {isError && errorMessage && (<div id="form-error-container" className="w-full mt-2 flex flex-row justify-center items-center">
            <span id="form-error-message" className="text-red-700">{errorMessage}</span>
          </div>)}
        </div>

        <div id="sign-in-form-footer">
          {isLoading
            ? (<SignInButton
              className="bg-[#350d36] border-[#350d36] text-white"
              key="email-password-sigin-button"
              text="Sign In "
              textColor="white"
              bgColor="[#350d36]"
              hoverBgColor="[#6e3b74]"
              borderColor="[#350d36]"
              disabled={true}
            />)
            : (<SignInButton
              type="submit"
              className="bg-[#350d36] border-[#350d36] text-white"
              key="email-password-sigin-button"
              text="Sign In "
              textColor="white"
              bgColor="[#350d36]"
              hoverBgColor="[#6e3b74]"
              borderColor="[#350d36]"
            />)
          }

          <div id="options" className="w-full mt-4">
            <div id="restore-password-option">
              <span
                className="text-xs mr-1">Forgot your password?
              </span>
              <a
                href="#"
                className="text-xs text-[#1264a3] font-bold"
                onClick={() => console.log('Redirect to Restet Password page...')}
              >
                Get help signing in
              </a>
            </div>
            <div id="mobile-create-account-option" className="min-[981px]:hidden mt-2">
              <span className="text-xs mr-1">Don’t have an account yet?</span>
              <a
                href="#"
                className="text-xs text-[#1264a3] font-bold"
                onClick={() => console.log('Redirect to Sign Up page...')}
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
