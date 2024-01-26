import ProfileImageComponent from '../profile/ProfileImageComponent'

function DirectMessageRowComponent({ firstName, lastName, imagePath, isOnline }) {
  const fullName = `${firstName} ${lastName}`

  return (
    <div className="w-full h-10 flex flex-row justify-start items-center rounded-md hover:bg-[#dcc9e8] px-2 my-2 py-1 cursor-pointer">
      <div className="h-6 mr-2">
        <ProfileImageComponent imagePath={imagePath} alt={firstName} isOnline={isOnline} />
      </div>
      <h6>{fullName}</h6>
    </div>
  )
}

export default DirectMessageRowComponent
