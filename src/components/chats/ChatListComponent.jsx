import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/customReduxHooks'
import { useFetchWorkSpaceDetailsMutation } from '@/features/api/apiSlice'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { setWorkSpaceData } from '@/features/workSpace/workSpaceSlice'

import ChatListSectionComponent from './ChatListSectionComponent'
import HorizontalDivider from '../dividers/HorizontalDivider'
import ProfileImageComponent from '../profile/ProfileImageComponent'

function ChatListComponent({ type = 'users-channels'}) {
  const dispatch = useAppDispatch()
  const [fetchWorkSpaceDetails, { isLoading, isError } ] = useFetchWorkSpaceDetailsMutation()
  const { channels = [], users = [] } = useAppSelector((state) => state.workSpace)

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
          const { channels, users } = responseData.data
          dispatch(setWorkSpaceData({ channels, users }))
        }
      }
    }

    getWorkSpaceDetails()
  }, [])

  const getChannelsAndUsersTemplate = () => (
    <>
      <ChatListSectionComponent
        sectionKey="channels"
        title="Channels"
        listItems={channels}
      />

      <HorizontalDivider className="min-[981px]:hidden mb-[6px] mt-[6px]" visibility="min-[981px]:hidden"  marginBottom='[6px]' marginTop='[6px]'/>

      <ChatListSectionComponent
        sectionKey="users"
        title="Direct messages"
        listItems={users}
      />

      <HorizontalDivider className="min-[981px]:hidden mb-[6px] mt-[6px]" visibility="min-[981px]:hidden"  marginBottom='[6px]' marginTop='[6px]'/>
    </>
  )

  const getDirectMessagesTemplate = () => (
    <div className="w-full flex flex-col justify-start mx-auto">
      {users.map(user => (
        <div key={user.id}>
          <div className="w-full h-14 flex flex-row justify-start items-center hover:bg-[#edddf6] pl-5 pr-1 my-2 py-1 cursor-pointer">
            <div className="w-10 h-10 mr-2">
              <ProfileImageComponent imagePath={user.imagePath} alt={user.firstName} isOnline={user.isOnline} />
            </div>
            <h6>{user.firstName} {user.lastName}</h6>
          </div>

          <HorizontalDivider className="max-[981px]:hidden mb-[6px] mt-[6px]" visibility="max-[981px]:hidden"  marginBottom='[6px]' marginTop='[6px]' />
        </div>
      ))}
    </div>
  )

  // - TODO: Showing loging spinner when data is loading or an error message

  return (
    <div className="flex flex-col justify-start items-center mt-1">
      {type === 'direct-messages'
        ? getDirectMessagesTemplate()
        : getChannelsAndUsersTemplate()
      }
    </div>
  )
}

export default ChatListComponent
