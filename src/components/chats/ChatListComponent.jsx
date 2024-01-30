import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/customReduxHooks'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { useAuthData } from '@/hooks/useAuthData'
import { setWorkSpaceData } from '@/features/workSpace/workSpaceSlice'
import { setData, clearData } from '@/features/chat/chatSlice'
import {
  useFetchWorkSpaceDetailsMutation,
  useFetchChannelMessageListMutation,
  useFetchDirectMessageListMutation
} from '@/features/api/apiSlice'
import { getUserMessage } from '@/utils'

import ChatListSectionComponent from './ChatListSectionComponent'
import HorizontalDivider from '../dividers/HorizontalDivider'
import ProfileImageComponent from '../profile/ProfileImageComponent'

function ChatListComponent({ type = 'users-channels'}) {
  const dispatch = useAppDispatch()
  const { authUser } = useAuthData()
  const { channels = [], directMessages = [] } = useAppSelector((state) => state.workSpace)
  const [fetchWorkSpaceDetails ] = useFetchWorkSpaceDetailsMutation()
  const [fetchChannelMessages] = useFetchChannelMessageListMutation()
  const [fetchDirectMessages] = useFetchDirectMessageListMutation()

  useEffect(() => {
    const getWorkSpaceDetails = async () => {
      const responseData = await fetchWorkSpaceDetails(1)

      if (responseData.error) {
        let message = ''

        if (responseData.error.data === 'Network Error') {
          message = 'Please check your network connection and try again'
        } else if(responseData.error.status === 401) {
          message = 'Invalid credentials'
        } else {
          message = 'Error sending data, please try again'
        }
        console.error('ERROR fetching workspace details.', message)
      } else {
        if (responseData.data) {
          const { channels, directMessages } = responseData.data
          dispatch(setWorkSpaceData({ channels, directMessages }))
          if (type === 'users-channels') {
            if (channels[0]) {
              const response = await fetchChannelMessages({ channelId: channels[0].id })
              const channel = response.data
  
              if (channel) {
                dispatch(setData({
                  chatType: 'Channel',
                  customData: {
                    name: channel.name,
                    isPublic: channel.public
                  }, users: channel.users,
                  messages: channel.messages
                }))
              } else {
                console.error('Channel not found. Id:', id)
                dispatch(clearData())
              }
            }
          } else {
            if (directMessages[0]) {
              const user = getUserMessage(directMessages[0], authUser)
              const directMessagesResponse = await fetchDirectMessages({ authUserId: authUser.id, userId: user.id })
              const data = directMessagesResponse.data

              if (data) {
                dispatch(setData({
                  chatType: 'DirectMessage',
                  customData: {
                    name: `${user.firstName} ${user.lastName}`,
                    isOnline: user.isOnline
                  },
                  users: [user],
                  messages: data.messages
                }))
              } else {
                console.error('Direct hcat not found. Id:', user.id)
                dispatch(clearData())
              }
            }
          }
        }
      }
    }

    getWorkSpaceDetails()
  }, [])

  const getChannelsAndUsersTemplate = () => (
    <div className="w-full pb-2">
      <ChatListSectionComponent
        sectionKey="channels"
        title="Channels"
        listItems={channels}
      />

      <HorizontalDivider className="min-[981px]:hidden mb-[6px] mt-[6px]" visibility="min-[981px]:hidden"  marginBottom='[6px]' marginTop='[6px]'/>

      <ChatListSectionComponent
        sectionKey="users"
        title="Direct messages"
        listItems={directMessages}
      />
    </div>
  )

  const handleOnClick = async (message) => {
    const user = getUserMessage(message, authUser)
    const response = await fetchDirectMessages({ authUserId: authUser.id, userId: user.id })
    const messages = response.data.messages || []
    dispatch(setData({
      chatType: 'DirectMessage',
      customData: {
        name: `${user.firstName} ${user.lastName}`,
        isOnline: user.isOnline
      },
      users: [user],
      messages
    }))
  }

  const getDirectMessagesTemplate = () => (
    <div className="w-full flex flex-col justify-start mx-auto">
      {directMessages.map(message => {
        const user = getUserMessage(message, authUser)
        return (<div key={`message-${message.id}`}>
          <div
            className="w-full h-20 flex flex-row justify-start items-center hover:bg-[#edddf6] pl-5 pr-4 py-1 cursor-pointer"
            onClick={() => handleOnClick(message)}
          >
            <div className="w-10 h-10 mr-2">
              <ProfileImageComponent imagePath={user.imagePath} alt={user.firstName} isOnline={user.isOnline} />
            </div>
            <div className="w-full flex flex-col">
              <h6>{user.firstName} {user.lastName}</h6>
              <span className="text-[10px]">{message.date}: {message.text}</span>
            </div>
          </div>

          <HorizontalDivider className="max-[981px]:hidden mb-[0px] mt-[0px]" visibility="max-[981px]:hidden"  marginBottom='[0px]' marginTop='[0px]' />
        </div>)
      })}
    </div>
  )

  // - TODO: Showing loading spinner when data is loading or an error message

  return (
    <div className="h-full justify-start items-center mt-1 overflow-y-auto">
      {type === 'direct-messages'
        ? getDirectMessagesTemplate()
        : getChannelsAndUsersTemplate()
      }
    </div>
  )
}

export default ChatListComponent
