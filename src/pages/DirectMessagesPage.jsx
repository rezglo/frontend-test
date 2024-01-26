import ChatComponent from '@/components/chats/ChatComponent'
import ChatListComponent from '@/components/chats/ChatListComponent'

function DirectMessagesPage() {
  return (
    <div id="content" className="h-full w-full flex flex-row">
      <div id="sidebar" className="w-1/3 max-[981px]:w-full min-[981px]:max-w-[325px] h-full max-[981px]:bg-white bg-violet-100 rounded-l-md max-[981px]:rounded-r-md pt-4">
        <div className="max-[981px]:hidden w-full px-4 flex flex-col justify-center items-start">
          <span className="text-lg font-bold mb-4">Direct Messages</span>
          <input
            id="search-button-desktop"
            name="search"
            type="text"
            autoComplete="false"
            placeholder="Search meassage"
            className="block w-full h-10 mb-4 max-w-72 rounded-md border-1 border-gray-400 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-500 placeholder:text-lg focus:ring-4 focus:ring-blue-200 sm:text-sm sm:leading-6"
          />
        </div>
        <ChatListComponent type="direct-messages" />
      </div>
      <div id="sidebar" className="max-[981px]:hidden w-full h-full bg-white min-[981px]:rounded-r-md max-[981px]:rounded-t-lg">
        <ChatComponent />
      </div>
    </div>
  )
}

export default DirectMessagesPage
