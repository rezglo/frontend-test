import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery({ baseUrl: 'http://url-to-api.com' }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: ({ email, password }) => ({ url: '/login', method: 'POST', data: { email, password } })
      }),
      fetchWorkSpaceList: builder.query({
        query: () => ({ url: '/workspaces', method: 'GET', data: {} })
      }),
      fetchWorkSpaceDetails: builder.mutation({
        query: (id) => ({ url: '/workspace-details', method: 'GET', data: { id } })
      })
    }
  }
})

export const { useLoginMutation, useFetchWorkSpaceListQuery, useFetchWorkSpaceDetailsMutation } = apiSlice
