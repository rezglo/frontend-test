import { FiberManualRecord, InfoOutlined } from '@mui/icons-material'
import { Avatar, ListItem, ListItemIcon } from '@mui/material'

import { SelectedDirectMessage, StatusDirectMessage } from '../types/index.d'

interface Props {
  selectedDirectMessage: SelectedDirectMessage | null
}

export const HeaderMessage: React.FC<Props> = ({ selectedDirectMessage }) => {
  return (
    <div className=" bg-white z-50 flex items-center- w-full justify-between p-3 border-solid border-b-2 border-b-gray-300 sticky top-0">
      <div className="flex justify-start items-center gap-2">
        <ListItem className="group" disablePadding>
          <>
            <ListItemIcon className="text-xl justify-center mr-2 min-w-[24px] text-white relative">
              <FiberManualRecord
                className={`absolute bottom-[-8px] right-[-8px] z-50 ${
                  selectedDirectMessage?.status === StatusDirectMessage.ONLINE
                    ? 'text-green-500'
                    : 'text-gray-500'
                }`}
              />
              <Avatar src={selectedDirectMessage?.avatar} alt={selectedDirectMessage?.name} />
            </ListItemIcon>
            <p className="font-bold">{selectedDirectMessage?.name}</p>
          </>
        </ListItem>
      </div>
      <div className="flex justify-end items-center gap-4">
        <InfoOutlined onClick={() => {}} />
      </div>
    </div>
  )
}
