import { Typography } from '@mui/material'
import { StarBorderOutlined, Lock, PersonAddOutlined, InfoOutlined } from '@mui/icons-material'

import { TYPE_CHANNEL_ACTION, useChannel } from '@/hooks'
import { Loading } from '@/components/loading'
import { Type } from '@/types.d'
import { MessageForm } from './components'
import { Message } from './components/Message'

export const Channel = () => {
  const { selectedChannel, isLoading, actionSubmit } = useChannel({
    type: TYPE_CHANNEL_ACTION.GET_BY_ID,
  })

  if (isLoading) return <Loading />

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-hidden relative">
      <div className=" bg-white z-50 flex items-center w-full justify-between p-3 border-solid border-b-2 border-b-gray-300 sticky top-0">
        <div className="flex justify-start items-center gap-2">
          {selectedChannel?.type === Type.PRIVATE ? <Lock /> : '#'}
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
      <div className="flex flex-col justify-start items-start w-full pt-8 bg-gray-200 px-16 h-full overflow-y-auto">
        {selectedChannel?.messages?.map((message) => (
          <Message
            idSender={message?.sender.id}
            idMessage={message?.id}
            name={message.sender?.name}
            avatar={message.sender?.avatar}
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
