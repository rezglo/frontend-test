import { forwardRef } from 'react'
import { IconButton, Typography } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

import { formatToTime } from '@/utils/format'

interface Props {
  message: string
  timestamp: string
  onOpenMenu: () => void
}

export const ContentMessage = forwardRef<HTMLButtonElement, Props>(
  ({ message, onOpenMenu, timestamp }, ref) => {
    const localeDate = formatToTime(timestamp)
    return (
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-between items-center  w-full">
          <Typography variant="caption" className="text-[15px]">
            {message}
          </Typography>

          <IconButton role="button" ref={ref} onClick={onOpenMenu} className="text-gray-400 ">
            <MoreVert className="text-lg" />
          </IconButton>
        </div>
        <div className="text-black capitalize font-bold text-sm flex justify-end items-end gap-3 w-full h-full ">
          <Typography variant="caption" className="text-[12px] text-gray-400 font-normal">
            {localeDate}
          </Typography>
        </div>
      </div>
    )
  },
)
