import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { useAppDispatch, useAppSelector } from '_redux/hooks'
import { fetch as signInFetch } from '_redux/slices/signInSlice'
import { Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signIn = useAppSelector((state) => state.signIn)

  const [email, setEmail] = useState('admin@slack.com')
  const [password, setPassword] = useState('123456')

  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if (submit && !signIn.loading && signIn.error === '') {
      navigate(`/slack`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signIn])

  useEffect(() => {
    validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password])

  const validateForm = () => {
    const errorsForm: { [key: string]: string } = {}
    if (email === '') {
      errorsForm.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsForm.email = 'Email is invalid.'
    }
    if (password === '') {
      errorsForm.password = 'Password is required.'
    }

    setErrors(errorsForm)
    setIsFormValid(Object.keys(errorsForm).length === 0)
  }

  const validFieldForm = (nameField: string) => {
    if (
      !isFormValid &&
      submit &&
      errors[nameField] !== undefined &&
      errors[nameField] !== ''
    ) {
      return errors[nameField]
    } else {
      return ''
    }
  }

  const send = () => {
    setSubmit(true)
    if (isFormValid) {
      dispatch(signInFetch({ email, password }))
    }
  }

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box sx={{ width: '100%' }}>
        {submit && !isFormValid && (
          <Alert severity="error">Complete the form</Alert>
        )}
        {submit && !signIn.loading && signIn.error !== '' && (
          <Alert severity="error">{signIn.error}</Alert>
        )}
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          autoFocus
          error={validFieldForm('email') !== ''}
          helperText={validFieldForm('email')}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
          error={validFieldForm('password') !== ''}
          helperText={validFieldForm('password')}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={send}
          disabled={signIn.loading}
        >
          {signIn.loading ? (
            <>
              <CircularProgress size={16} />
            </>
          ) : (
            'Sign In'
          )}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
