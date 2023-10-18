import { CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <div className="h-full flex w-full flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24">
      <CircularProgress className="text-slack" />
    </div>
  )
}
