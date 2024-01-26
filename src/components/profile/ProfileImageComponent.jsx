function ProfileImageComponent({ imagePath, alt, isOnline }) {
  return (
    <div className="relative inline-block w-full h-full bg-slate-500 rounded-[4px]">
      <img src={imagePath} alt={alt} className="w-full h-full " />
      <span className={`absolute bottom-[-1px] right-[-3px] w-2.5 h-2.5 rounded-full border-[2px] border-white ${isOnline ? 'bg-green-700' : 'bg-red-900' }`}></span>
    </div>
  )
}

export default ProfileImageComponent
