import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { slugify } from '_global/helpers'
import { Channel } from 'types/Channel'

interface InitialState {
  result: Channel[]
}

const initialState: InitialState = {
  result: [
    { id: 'forest_liddy', name: 'Forest Liddy' },
    { id: 'sully_creighton', name: 'Sully Creighton' },
    { id: 'maria_monique', name: 'Maria Monique' }
  ]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<String>) => {
      const id = slugify(String(action.payload))
      const itemInChannel = state.result.find((item) => item.id === id)
      if (itemInChannel == null) {
        state.result.push({
          id,
          name: String(action.payload)
        })
      }
    },
    removeItem: (state, action: PayloadAction<String>) => {
      const removeItem = state.result.filter(
        (item) => item.id !== action.payload
      )
      state.result = removeItem
    },
    reset: (state) => {
      state.result = []
    }
  }
})

export default usersSlice.reducer
export const { addItem, removeItem, reset } = usersSlice.actions
