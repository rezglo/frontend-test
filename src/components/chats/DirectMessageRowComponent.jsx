import { useAuthData } from '@/hooks/useAuthData'
import ProfileImageComponent from '../profile/ProfileImageComponent'
import { useFetchDirectMessageListMutation } from '@/features/api/apiSlice'
import { setData } from '@/features/chat/chatSlice'
import { useAppDispatch } from '@/hooks/customReduxHooks'

function DirectMessageRowComponent({ user }) {
  const fullName = `${user.firstName} ${user.lastName}`
  const dispatch = useAppDispatch()
  const { authUser } = useAuthData()

  const [fetchDirectMessageList, { isLoading, isError }] = useFetchDirectMessageListMutation()

  const handleOnClick = async () => {
    const response = await fetchDirectMessageList({ authUserId: authUser.id, userId: user.id })
    const messages = response.data.messages || []
    dispatch(setData({
      chatType: 'DirectMessage',
      customData: {
        name: `${user.firstName} ${user.lastName}`,
        isOnline: user.isOnline
      },
      users: [user],
      messages,
      showOnMobile: true
    }))
  }

  return (
    <div
      className="w-full h-10 flex flex-row justify-start items-center rounded-md hover:bg-[#dcc9e8] px-2 my-2 py-1 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="h-6 mr-2">
        <ProfileImageComponent imagePath={user.imagePath} alt={user.firstName} isOnline={user.isOnline} />
      </div>
      <h6>{fullName}</h6>
    </div>
  )
}

export default DirectMessageRowComponent
