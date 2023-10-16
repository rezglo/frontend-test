import { Loading } from '@/components/loading'
import { MessageForm } from '@/components/message/MessageForm'
import { HeaderMessage, Message } from './components'
import { TYPE_CHANNEL_ACTION, useChannel } from './hooks'
import { useUserStore } from '@/stores'
import { AuthUser } from '@/features/auth/login/types'

export const Channel = () => {
  const { selectedChannel, isLoading, addMessageToChannel, scrollRef } = useChannel({
    type: TYPE_CHANNEL_ACTION.GET_BY_ID,
  })

  const authUser = useUserStore((state) => state.authUser) as AuthUser

  const actionSubmit = async (message: string) => {
    await addMessageToChannel({ message, authUser })
    const target = scrollRef.current as unknown as HTMLDivElement
    target.scrollIntoView({ behavior: 'smooth' })
  }

  if (isLoading) return <Loading />

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-hidden relative">
      <HeaderMessage selectedChannel={selectedChannel} />
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
        <div ref={scrollRef}></div>
      </div>
      <MessageForm actionSubmit={actionSubmit} />
    </section>
  )
}
