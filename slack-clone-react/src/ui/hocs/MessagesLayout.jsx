import MessageContent from "../components/messages/MessageContent";
import MessageInput from "../components/messages/MessageInput";

const MessagesLayout = ({ children }) => {
  return (
    <>
      <ul className="max-w-sm md:max-w-2xl overflow-x-auto">
        <MessageContent
          author={"Leslie Alexander"}
          message={"leslie.alexander@example.com"}
        />
      </ul>
      <MessageInput />
    </>
  );
};

export default MessagesLayout;
