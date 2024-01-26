import { useState } from 'react'
import ChannelRowComponent from './ChannelRowComponent'
import DirectMessageRowComponent from './DirectMessageRowComponent'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function ChatListSectionComponent({ sectionKey, title, listItems }) {
  const [sectionState, setSectionState] = useState({
    sectionKey,
    title,
    isOpen: true
  })

  const toggleSection = () => {
    setSectionState({
      ...sectionState,
      isOpen: !sectionState.isOpen
    })
  }

  return (
    <div className="w-full max-w-72 max-[981px]:max-w-[400px] flex flex-col justify-start items-center py-1.5 px-2">
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
              return (
                <ChannelRowComponent
                  key={`channel-${item.id}`}
                  id={item.id}
                  name={item.name}
                  isPublic={item.public}
                />)

            case 'users':
              return (
                <DirectMessageRowComponent
                  key={`direct-message-${item.id}`}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  imagePath={item.imagePath}
                  isOnline={item.isOnline}
                />)
            }
          }))}
        </div>
      )}
    </div>
  )
}

export default ChatListSectionComponent
