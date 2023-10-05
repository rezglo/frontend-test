import { useEffect, useState } from 'react'
import { useChannelStore, useUserStore } from '../store'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthUser } from '../types'

export enum TYPE_CHANNEL_ACTION {
  GET_ALL,
  GET_BY_ID,
}

export const useChannel = ({ type }: { type: TYPE_CHANNEL_ACTION }) => {
  const { channelId } = useParams()
  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(false)
  const [
    channels,
    getChannels,
    removeChannel,
    selectedChannel,
    getChannelById,
    addMessageToChannel,
  ] = useChannelStore((state) => [
    state.channels,
    state.getChannels,
    state.removeChannel,
    state.selectedChannel,
    state.getChannelById,
    state.addMessageToChannel,
  ])

  const authUser = useUserStore((state) => state.authUser) as AuthUser

  const actionSubmit = async (message: string) => {
    await addMessageToChannel({ message, authUser })
  }

  // GET CHANNEL SELECTED
  useEffect(() => {
    if (!(type === TYPE_CHANNEL_ACTION.GET_BY_ID)) return
    if (!channelId) navigate('/', { replace: true })

    const getChannelByIdHook = async () => {
      setLoading(true)
      try {
        await getChannelById(channelId as string)
      } finally {
        setLoading(false)
      }
    }

    getChannelByIdHook()
  }, [channelId, getChannelById, navigate, type])

  // GET ALL CHANNELS
  useEffect(() => {
    if (!(type === TYPE_CHANNEL_ACTION.GET_ALL)) return

    const getAllChannels = async () => {
      setLoading(true)

      try {
        await getChannels()
      } finally {
        setLoading(false)
      }
    }
    getAllChannels()
  }, [getChannels, type])

  return { isLoading, channels, getChannels, removeChannel, selectedChannel, actionSubmit }
}
