import { Avatar, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { InfoOutlined, FiberManualRecord } from '@mui/icons-material'

import { Status } from '../../types.d'
import { Message } from './components'
import { Loading } from '../../components/Loading'
import { TYPE_DIRECT_MESSAGE_ACTION, useDirectMessage } from '../../hooks'
import { MessageForm } from '../channel/components'

export const DirectMessage = () => {
  const { selectedDirectMessage, isLoading, actionSubmit } = useDirectMessage({
    type: TYPE_DIRECT_MESSAGE_ACTION.GET_BY_ID,
  })

  if (isLoading) return <Loading />

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-y-auto relative">
      <div className=" bg-white z-50 flex items-center- w-full justify-between p-3 border-solid border-b-2 border-b-gray-300 sticky top-0">
        <div className="flex justify-start items-center gap-2">
          <ListItem className="group" disablePadding>
            <ListItemButton className="h-[36px] pl-10">
              <ListItemIcon className="text-xl justify-center mr-2 min-w-[24px] text-white relative">
                <FiberManualRecord
                  className={`absolute bottom-[-8px] right-[-8px] z-50 ${
                    selectedDirectMessage?.status === Status.ONLINE
                      ? 'text-green-500'
                      : 'text-gray-500'
                  }`}
                />
                <Avatar src={selectedDirectMessage?.avatar} alt={selectedDirectMessage?.name} />
              </ListItemIcon>
              <p className="font-bold">{selectedDirectMessage?.name}</p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="flex justify-end items-center gap-4">
          <InfoOutlined onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full pt-8 bg-gray-200 px-16">
        {selectedDirectMessage?.messages?.map((message) => (
          <Message
            idSender={message?.sender.id}
            idMessage={message?.id}
            message={message?.text}
            timestamp={message?.sentAt}
            key={message?.id}
          />
        ))}
      </div>
      <MessageForm actionSubmit={actionSubmit} />
    </section>
  )
}
