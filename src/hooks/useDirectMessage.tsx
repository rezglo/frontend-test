import { useEffect, useState } from 'react'
import { useDirectMessageStore, useUserStore } from '../store'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthUser } from '../types'

export enum TYPE_DIRECT_MESSAGE_ACTION {
  GET_ALL,
  GET_BY_ID,
}

export const useDirectMessage = ({ type }: { type: TYPE_DIRECT_MESSAGE_ACTION }) => {
  const [isLoading, setLoading] = useState(false)
  const { directMessageId } = useParams()
  const navigate = useNavigate()

  const [
    directMessages,
    getDirectMessages,
    selectedDirectMessage,
    getDirectMessagesById,
    addMessageToDirectMessage,
  ] = useDirectMessageStore((state) => [
    state.directMessages,
    state.getDirectMessages,
    state.selectedDirectMessage,
    state.getDirectMessagesById,
    state.addMessageToDirectMessage,
  ])

  const authUser = useUserStore((state) => state.authUser) as AuthUser

  const actionSubmit = async (message: string) => {
    await addMessageToDirectMessage({ message, authUser })
  }

  // Get Direct message by id
  useEffect(() => {
    if (!(type === TYPE_DIRECT_MESSAGE_ACTION.GET_BY_ID)) return

    if (!directMessageId) navigate('/', { replace: true })

    const getDirectMessagesByIdLocal = async () => {
      setLoading(true)

      try {
        await getDirectMessagesById(directMessageId as string)
      } finally {
        setLoading(false)
      }
    }

    getDirectMessagesByIdLocal()
  }, [directMessageId, getDirectMessagesById, navigate, type])

  // Get all direct messages
  useEffect(() => {
    if (!(type === TYPE_DIRECT_MESSAGE_ACTION.GET_ALL)) return

    const getAllDirectMessages = async () => {
      setLoading(true)

      try {
        await getDirectMessages()
      } finally {
        setLoading(false)
      }
    }
    getAllDirectMessages()
  }, [getDirectMessages, type])

  return {
    isLoading,
    directMessages,
    getDirectMessages,
    selectedDirectMessage,
    actionSubmit,
  }
}
