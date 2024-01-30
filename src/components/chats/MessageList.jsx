import { useAppSelector } from '@/hooks/customReduxHooks'
import MessageRow from './MessageRow'

function MessageList() {
  const { messages } = useAppSelector(state => state.chat)

  return (
    <div>
      {messages.length > 0
        ? messages.map(message => <MessageRow key={`message-${message.id}`} message={message} />)
        : (<div className="flex flex-row h-full w-full justify-center items-center py-20">
            <span className="text-lg">This chat doesn't have any message yet.</span>
        </div>)
      }
    </div>
  )
}

export default MessageList
