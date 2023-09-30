import {
  createSlice,
  createAsyncThunk,
  type PayloadAction
} from '@reduxjs/toolkit'

interface DataRequest {
  email: string
  password: string
}
export interface Data {
  login: boolean
  name?: string
  email?: string
  rol?: string
}
interface InitialState {
  loading: boolean
  result: Data
  error: string
}
const initialState: InitialState = {
  loading: false,
  result: { login: false },
  error: ''
}

export const fetch = createAsyncThunk(
  'signIn/fetch',
  async (
    { email, password }: DataRequest,
    { fulfillWithValue, rejectWithValue }
  ) => {
    let resp = false
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
      resp = true
    })
    if (resp) {
      if (email === 'admin@slack.com' && password === '123456') {
        return fulfillWithValue({
          email,
          name: 'User Test',
          rol: 'Administrator'
        })
      } else {
        return rejectWithValue({})
      }
    }
  }
)

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      state.loading = true
      state.result = initialState.result
      state.error = ''
    })
    builder.addCase(fetch.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.result = {
        login: true,
        email: action.payload?.email,
        name: action.payload?.name,
        rol: action.payload?.rol
      }
      state.error = ''
    })
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false
      state.result = initialState.result
      state.error = 'The email address or password is incorrect.'
    })
  }
})

export default signInSlice.reducer

export const { logout } = signInSlice.actions
