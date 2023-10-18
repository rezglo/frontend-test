import { forwardRef } from 'react'
import { IconButton, Typography } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

import { formatToTime } from '@/utils/format'

interface Props {
  name: string
  message: string
  timestamp: string
  onOpenMenu: () => void
}

export const ContentMessage = forwardRef<HTMLButtonElement, Props>(
  ({ name, message, onOpenMenu, timestamp }, ref) => {
    const localeDate = formatToTime(timestamp)
    return (
      <>
        <div className="w-full text-black capitalize font-bold text-sm flex justify-between items-center gap-3">
          <p>{name}</p>
          <IconButton ref={ref} onClick={onOpenMenu} className="text-gray-400 ">
            <MoreVert className="text-lg" />
          </IconButton>
        </div>
        <Typography variant="caption" className="text-[15px]">
          {message}
        </Typography>
        <div className="text-black capitalize font-bold text-sm flex justify-end items-end gap-3 w-full h-full ">
          <Typography variant="caption" className="text-[12px] text-gray-400 font-normal">
            {localeDate}
          </Typography>
        </div>
      </>
    )
  },
)
