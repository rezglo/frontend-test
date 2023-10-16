import { Loading } from '@/components/loading'
import { MessageForm } from '@/components/message'
import { TYPE_DIRECT_MESSAGE_ACTION, useDirectMessage } from './hooks/useDirectMessage'
import { Message, HeaderMessage } from './components'
import { AuthUser } from '@/features/auth/login/types'
import { useUserStore } from '@/stores'

export const DirectMessage = () => {
  const { selectedDirectMessage, isLoading, scrollRef, addMessageToDirectMessage } =
    useDirectMessage({
      type: TYPE_DIRECT_MESSAGE_ACTION.GET_BY_ID,
    })

  const authUser = useUserStore((state) => state.authUser) as AuthUser

  const actionSubmit = async (message: string) => {
    await addMessageToDirectMessage({ message, authUser })
    const target = scrollRef.current as unknown as HTMLDivElement
    target.scrollIntoView({ behavior: 'smooth' })
  }

  if (isLoading) return <Loading />

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-hidden relative">
      <HeaderMessage selectedDirectMessage={selectedDirectMessage} />
      <div className="flex flex-col justify-start items-start w-full h-full pt-8 bg-gray-200 px-16 overflow-y-auto">
        {selectedDirectMessage?.messages?.map((message) => (
          <Message
            idSender={message?.sender.id}
            idMessage={message?.id}
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
