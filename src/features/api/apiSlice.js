import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery({ baseUrl: 'http://url-to-api.com' }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: ({ email, password }) => ({ url: '/login', method: 'post', data: { email, password } })
      })
    }
  }
})

export const { useLoginMutation } = apiSlice
