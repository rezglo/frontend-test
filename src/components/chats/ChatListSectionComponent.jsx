import { useState } from 'react'
import ChannelRowComponent from './ChannelRowComponent'
import DirectMessageRowComponent from './DirectMessageRowComponent'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useAuthData } from '@/hooks/useAuthData'
import { getUserMessage } from '@/utils'

function ChatListSectionComponent({ sectionKey, title, listItems }) {
  const [sectionState, setSectionState] = useState({
    sectionKey,
    title,
    isOpen: true
  })
  const { authUser } = useAuthData()

  const toggleSection = () => {
    setSectionState({
      ...sectionState,
      isOpen: !sectionState.isOpen
    })
  }

  return (
    <div className="w-full max-w-72 max-[981px]:max-w-[400px] mx-auto h-full flex flex-col justify-start items-center pt-1.5 pb-3 px-2">
      <div
        className="w-full flex flex-row justify-between items-center texts-left hover:bg-[#dcc9e8] transition duration-300 cursor-pointer py-1 px-2 rounded-md"
        onClick={toggleSection}
      >
        <span className="font-semibold">{title}</span>
        <ChevronDownIcon className={`w-4 h-4 float-right transform ${sectionState.isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
      </div>

      {sectionState.isOpen && listItems && listItems.length > 0 && (
        <div className="w-full">
          {listItems.map((item => {
            switch (sectionState.sectionKey) {
              case 'channels':
                const channel = item
                return (<ChannelRowComponent
                  key={`channel-${channel.id}`}
                  id={channel.id}
                  name={channel.name}
                  isPublic={channel.public}
                />)

              case 'users':
                const message = item
                const user = getUserMessage(item, authUser)
                return (<DirectMessageRowComponent
                  key={`direct-message-${message.id}`}
                  user={user}
                />)
            }
          }))}
        </div>
      )}
    </div>
  )
}

export default ChatListSectionComponent
