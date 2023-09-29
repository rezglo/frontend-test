import {
  createSlice,
  createAsyncThunk,
  type PayloadAction
} from '@reduxjs/toolkit'
import { Message } from 'types/Message'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const data: Message[] = [
  {
    type: 'channel',
    typeId: 'class',
    user: 'temp',
    text: 'Vivamus eget tempus libero. Nam facilisis, turpis sed finibus venenatis, sem dolor cursus libero, id hendrerit eros enim ut eros. In rhoncus ante at lacus maximus, at gravida velit viverra. Aliquam lobortis cursus erat quis dapibus. Phasellus blandit vestibulum elit, vitae tincidunt dui maximus nec. Cras hendrerit pellentesque nunc id gravida. Phasellus non turpis lacinia, vehicula diam sit amet, mattis enim.',
    unixTime: 1696026310
  }
]

interface DataRequest {
  text: string
  user: string
  type: 'channel' | 'person'
  typeId: string
}

interface InitialState {
  loading: boolean
  result: Message[]
  error: string
}
const initialState: InitialState = {
  loading: false,
  result: data,
  error: ''
}

export const fetch = createAsyncThunk(
  'chat/fetch',
  async (
    { text, user, type, typeId }: DataRequest,
    { fulfillWithValue, rejectWithValue }
  ) => {
    let resp = false
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
      resp = true
    })
    if (resp) {
      if (text !== '' && user !== '' && typeId !== '') {
        return fulfillWithValue({
          text,
          user,
          type,
          typeId
        })
      } else {
        return rejectWithValue({})
      }
    }
  }
)

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetch.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.result = [
        ...state.result,
        {
          id: uuidv4(),
          type: action.payload.type,
          typeId: action.payload.typeId,
          user: action.payload.user,
          text: action.payload.text,
          unixTime: moment().unix()
        }
      ]
      state.error = ''
    })
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false
      state.error = 'Something went wrong'
    })
  }
})

export default chatSlice.reducer

export const { logout } = chatSlice.actions
