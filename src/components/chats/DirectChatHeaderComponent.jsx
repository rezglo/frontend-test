import ProfileImageComponent from '../profile/ProfileImageComponent'

function DirectChatHeaderComponent({ name, isOnline, imagePath }) {
  return (
    <div className="w-full h-16 bg-white border-b-[1px] border-gray-300 flex flex-row px-5 py-2 justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="h-10 w-10 mr-3">
          <ProfileImageComponent alt={name} imagePath={imagePath} isOnline={isOnline} />
        </div>
        <span className="font-bold text-lg">{name}</span>
      </div>

      <div>
        Options
      </div>
    </div>
  )
}

export default DirectChatHeaderComponent