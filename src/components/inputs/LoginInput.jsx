function LoginInput({ id, name, label, placeholder, validations, errors, type = 'text' }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-md font-medium leading-6 text-gray-900">{label}</label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete="false"
          placeholder={placeholder}
          className="block w-full h-11 mb-1 rounded-md border-1 border-gray-400 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-500 placeholder:text-lg focus:ring-4 focus:ring-blue-200 sm:text-sm sm:leading-6"
          {...validations}
        />
        {errors[name] && errors[name].message && (<span id="email-error-message" className="text-red-700">{errors[name].message}</span>)}
      </div>
    </div>

  )
}

export default LoginInput
