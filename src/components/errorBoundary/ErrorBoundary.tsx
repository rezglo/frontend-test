import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Button } from '@/components'

export const ErrorBoundary = () => {
  const error = useRouteError()
  let message

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      message = "This page doesn't exist!"
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">{'Ooops, something went wrong :('}</h2>
      {message && <h3 className="text-sm font-semibold">{message}</h3>}
      <Button
        className="mt-4 text-white rounded-md bg-slack"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}
