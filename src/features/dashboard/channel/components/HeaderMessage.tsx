import { Typography } from '@mui/material'
import { InfoOutlined, PersonAddOutlined, StarBorderOutlined, Lock } from '@mui/icons-material'

import { ChannelType, SelectedChannel } from '../types'

interface Props {
  selectedChannel: SelectedChannel | null
}

export const HeaderMessage: React.FC<Props> = ({ selectedChannel }) => {
  return (
    <div className=" bg-white z-50 flex items-center w-full justify-between p-3 border-solid border-b-2 border-b-gray-300 sticky top-0">
      <div className="flex justify-start items-center gap-2">
        {selectedChannel?.type === ChannelType.PRIVATE ? <Lock /> : '#'}
        <Typography variant="h6" component="h4">
          {selectedChannel?.name}
        </Typography>
        <StarBorderOutlined />
      </div>
      <div className="flex justify-end items-center gap-4">
        <PersonAddOutlined />
        <InfoOutlined />
      </div>
    </div>
  )
}
