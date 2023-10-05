import { CircularProgress, Typography } from '@mui/material'

export const Loading = () => {
  return (
    <div className="h-full flex w-full flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24">
      <Typography component="h1" className="text-13 sm:text-20 mb-16" color="textSecondary">
        Loading...
      </Typography>
      <CircularProgress className="text-slack" />
    </div>
  )
}
