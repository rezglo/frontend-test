import { Button, Input, Typography } from '@mui/material'
import logo from '../../assets/slack.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { type ChangeEvent, type FormEvent, useState, useEffect } from 'react'
import { useUserStore } from '../../store/users'
import { type InputUser } from '../../store/types'
import { useChannelStore } from '../../store/channels'
import './Login.css'

function Login () {
  const [form, setForm] = useState<InputUser>({} as InputUser)
  const getUsers = useUserStore(state => state.getUsers)
  const signInUser = useUserStore(state => state.signInUser)
  const getChannelById = useChannelStore(state => state.getChannelById)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    getUsers()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      signInUser(form)
      getChannelById(form.email)
      const newPath = location?.state?.location?.pathname ?? '/'
      navigate(newPath)
    } catch (error) {

    }
  }
  return (
    <section className='login'>
      <div className='login-inner'>
        <img src={logo} alt="" />
        <Typography variant='subtitle1'>Sign in to Slack</Typography>
        <form action="" className='login-form' onSubmit={handleSubmit}>
          <Input name='email' type='email' onChange={handleChange} placeholder='Email' />
          <Input name='password' type='password' onChange={handleChange} placeholder='Password' />
          <Button variant='contained' color='info' type='submit'>
            Sign in
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login
