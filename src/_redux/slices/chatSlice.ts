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
    id: '0e16944c-3191-431b-9d90-74198f756cce',
    type: 'channel',
    typeId: 'project',
    user: 'Maria Monique',
    text: 'Proin sapien tortor, fermentum eu ante vel, faucibus euismod tellus. Aenean pretium mauris id velit elementum, eu scelerisque metus condimentum. Vivamus suscipit dolor in nisi dapibus fermentum. Mauris tortor augue, commodo sit amet ipsum ac, porttitor aliquet augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus facilisis ornare justo, sed faucibus quam ornare ac. In hac habitasse platea dictumst. Proin vitae ligula ut enim gravida viverra. Etiam purus leo, consequat ut congue a, posuere eu quam. Aenean vitae consequat elit. Pellentesque id ultricies ante, vel feugiat ipsum. Aenean pulvinar tincidunt neque, eget rhoncus nulla congue ut. Donec nulla urna, maximus ut tellus in, accumsan mollis sem.',
    unixTime: 1696026310
  },
  {
    id: 'f7bfc091-1a2c-48c2-9097-772cda34258b',
    type: 'channel',
    typeId: 'project',
    user: 'Forest Liddy',
    text: 'Vivamus eget tempus libero. Nam facilisis, turpis sed finibus venenatis, sem dolor cursus libero, id hendrerit eros enim ut eros. In rhoncus ante at lacus maximus, at gravida velit viverra. Aliquam lobortis cursus erat quis dapibus. Phasellus blandit vestibulum elit, vitae tincidunt dui maximus nec. Cras hendrerit pellentesque nunc id gravida. Phasellus non turpis lacinia, vehicula diam sit amet, mattis enim.',
    unixTime: 1696026310
  },
  {
    id: 'd528cc57-5bd0-4d9c-ad94-13570d01757d',
    type: 'channel',
    typeId: 'scrum',
    user: 'Forest Liddy',
    text: 'Nulla facilisi. Aliquam imperdiet bibendum nisi vitae condimentum. Suspendisse eleifend nibh in enim ornare, id tempus orci dapibus. Proin sed scelerisque neque. Vestibulum blandit mi quis leo euismod faucibus. Vestibulum eget libero eget nibh sodales vehicula vitae ut est. Integer vel commodo massa, eget imperdiet sapien. Mauris auctor elementum nibh, ac vehicula leo pellentesque quis. Cras pulvinar ipsum vulputate.',
    unixTime: 1696026310
  },
  {
    id: '92b0514d-8b89-435c-8949-5718ac5f5864',
    type: 'channel',
    typeId: 'class',
    user: 'Maria Monique',
    text: 'In pulvinar ullamcorper lectus, id venenatis magna tincidunt eu. Etiam maximus blandit lacinia. Quisque malesuada auctor posuere. Donec iaculis ante in arcu hendrerit euismod. Mauris vel tincidunt risus. In bibendum, nisl nec aliquet blandit, neque nulla semper enim, ac mattis ligula ante ac tellus. Fusce maximus, turpis ut facilisis interdum, quam nisl mollis diam, quis commodo dui est a est',
    unixTime: 1696026310
  },
  {
    id: 'dacaedf5-fa96-4261-bab1-ef3d6d02600e',
    type: 'user',
    typeId: 'maria_monique',
    user: 'Maria Monique',
    text: 'In pulvinar ullamcorper lectus, id venenatis magna tincidunt eu. Etiam maximus blandit lacinia. Quisque malesuada auctor posuere. Donec iaculis ante in arcu hendrerit euismod. Mauris vel tincidunt risus. In bibendum, nisl nec aliquet blandit, neque nulla semper enim, ac mattis ligula ante ac tellus. Fusce maximus, turpis ut facilisis interdum, quam nisl mollis diam, quis commodo dui est a est',
    unixTime: 1696026310
  }
]

interface DataRequest {
  text: string
  user: string
  type: 'channel' | 'user'
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
export const fetchRemove = createAsyncThunk(
  'chat/remove',
  async ({ id }: { id: string }, { fulfillWithValue, rejectWithValue }) => {
    let resp = false
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
      resp = true
    })
    if (resp) {
      if (id !== '') {
        return fulfillWithValue({
          id
        })
      } else {
        return rejectWithValue({})
      }
    }
  }
)

export const fetchEdit = createAsyncThunk(
  'chat/edit',
  async (
    { id, text }: { id: string; text: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    let resp = false
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
      resp = true
    })
    if (resp) {
      if (id !== '' && text !== '') {
        return fulfillWithValue({
          id,
          text
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

    builder.addCase(fetchRemove.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(
      fetchRemove.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false
        state.result = state.result.filter(
          (item) => item.id !== action.payload.id
        )
        state.error = ''
      }
    )
    builder.addCase(fetchRemove.rejected, (state, action) => {
      state.loading = false
      state.error = 'Something went wrong'
    })

    builder.addCase(fetchEdit.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(
      fetchEdit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false
        state.result = state.result.map((item) => {
          return {
            ...item,
            text:
              action.payload.id === item.id ? action.payload.text : item.text
          }
        })
        state.error = ''
      }
    )
    builder.addCase(fetchEdit.rejected, (state, action) => {
      state.loading = false
      state.error = 'Something went wrong'
    })
  }
})

export default chatSlice.reducer

export const { logout } = chatSlice.actions
