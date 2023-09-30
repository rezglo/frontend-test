import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { slugify } from '_global/helpers'
import { Channel } from 'types/Channel'

interface InitialState {
  result: Channel[]
}

const initialState: InitialState = {
  result: [
    { id: 'project', name: 'Project' },
    { id: 'scrum', name: 'Scrum' },
    { id: 'class', name: 'Class' }
  ]
}

const channelsSlice = createSlice({
  name: 'channels',
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

export default channelsSlice.reducer
export const { addItem, removeItem, reset } = channelsSlice.actions
