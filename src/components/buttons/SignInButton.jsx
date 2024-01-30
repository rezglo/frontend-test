function SignInButton({ onClick, type = 'button', text, disabled = false, textColor = 'gray-900', imageSrc = null, imageAlt = '', bgColor = 'white', borderColor = 'gray-400', hoverBgColor = 'gray-50' }) {
  const buttonClasses = `mt-4 w-full h-11 flex flex-row justify-center items-center rounded-md bg-${bgColor} px-3 py-2 text-lg border-2 border-${borderColor} hover:shadow-md hover:bg-${hoverBgColor}`
  const textButtonClasses = `font-semibold text-${textColor}`

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="w-5 h-5 mr-4"/>}
      <p className={textButtonClasses}>{text}</p>
    </button>
  )
}

export default SignInButton
