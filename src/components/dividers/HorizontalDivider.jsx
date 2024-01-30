function HorizontalDivider({ text = '', textColor = 'gray-700', color = 'gray-300', marginTop = '6', marginBottom = '6', visibility = '' }) {
  const containerClasses = `w-full flex flex-row justify-center items-center mt-${marginTop} mb-${marginBottom} ${visibility}`
  const dividerClasses = `flex-grow border-t border-${color}`
  const textClasses = `flex-shrink mx-4 text-${textColor}`

  return (
    <div className={containerClasses}>
      {text
        ? (<>
          <div className={dividerClasses}></div>
          <span className={textClasses}>{text}</span>
          <div className={dividerClasses}></div>
        </>)
        : (<div className={dividerClasses}></div>)
      }
    </div>
  )
}

export default HorizontalDivider
