import { useAppSelector } from '@/hooks/customReduxHooks'

import MessageList from './MessageList'
import DirectChatHeaderComponent from './DirectChatHeaderComponent'
import ChannelChatHeaderComponent from './ChannelChatHeaderComponent'

function ChatComponent() {
  const { chatType, customData, users }  = useAppSelector(state => state.chat)

  return (
    < >
      {chatType
        ? (<div className="h-full w-full">
            <div className="w-full h-[90%] flex flex-col">
              {chatType === 'DirectMessage'
                ? <DirectChatHeaderComponent name={customData.name} isOnline={customData.isOnline} imagePath={users[0].imagePath}/>
                : <ChannelChatHeaderComponent name={customData.name} isPublic={customData.isPublic} totalMembers={users.length} />
              }

              <div className="h-full overflow-y-auto">
                <MessageList />
              </div>
            </div>
            <div className="sticky bottom-0 w-full h-[10%] min-h-11 px-10 pb-14">
              <input
                id="message-input"
                name="message-input"
                type="text"
                autoComplete="false"
                placeholder="Start typing..."
                className="w-full h-11 rounded-md border-1 bg-white border-gray-400 py-1.5 text-gray shadow-sm placeholder:text-gray placeholder:text-lg focus:ring-3 focus:border-blue-700 focus:ring-blue-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>)
        : (<div className="h-full w-full flex flex-row py-20 justify-center items-center"></div>)
      }
    </>
  )
}

export default ChatComponent
