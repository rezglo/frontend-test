import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDirectMessageStore } from '@/stores'

export enum TYPE_DIRECT_MESSAGE_ACTION {
  GET_ALL,
  GET_BY_ID,
}

export const useDirectMessage = ({ type }: { type: TYPE_DIRECT_MESSAGE_ACTION }) => {
  const [isLoading, setLoading] = useState(false)
  const scrollRef = useRef(null)
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
    addMessageToDirectMessage,
    scrollRef,
  }
}
