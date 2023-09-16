import React, { useState } from "react";
import { Loader2, Pencil, SendHorizontal, Trash2, User } from "lucide-react";
import format from "date-fns/format";
import { v4 as uuid4 } from "uuid";

import useChat from "@/hooks/useChat";
import { Message as IMessage } from "@/types";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import useUser from "@/hooks/useUser";
import { sendMessage } from "@/services/post";
import useFocus from "@/hooks/useFocus";
import useScrollToBottom from "@/hooks/useScrollToBottom";

const ChatWindow: React.FC = () => {
  const chat = useChat();

  if (!chat) return;

  return (
    <section className="flex-1 py-3">
      <div className="flex flex-col h-full">
        <header className="py-2 px-5">
          <h3 className="text-lg font-bold">{chat.name}</h3>
        </header>

        <Separator className="mt-3" />

        <MessageList>
          {chat.messages.map((item) => (
            <Message key={item.id} messageData={item} />
          ))}
        </MessageList>

        <div className="px-5">
          <MessageInput key={chat.name} />
        </div>
      </div>
    </section>
  );
};

const Message: React.FC<{ messageData: IMessage }> = ({ messageData }) => {
  const chat = useChat();

  if (!chat) return;

  const time = format(messageData.createdAt, "p");
  return (
    <div className="flex items-start justify-between group rounded hover:bg-gray-200 p-2">
      <div className="flex items-start gap-3 max-w-[60%]">
        <User
          fill="white"
          size={48}
          className="flex-shrink-0 rounded bg-primary text-primary-foreground"
        />

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold">{messageData.sender.name}</span>
            <small className="text-gray-500">{time}</small>
          </div>

          <span>{messageData.body}</span>
        </div>
      </div>

      <div className="hidden group-hover:flex items-center gap-4">
        <button>
          <Pencil size={16} />
        </button>

        <button onClick={() => chat.deleteMessage(messageData.id)}>
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

const MessageList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const divRef = useScrollToBottom();

  return (
    <div ref={divRef} className="p-5 pt-0 w-full overflow-y-auto h-full">
      <div className="flex flex-col justify-end min-h-full gap-4">
        {children}
      </div>
    </div>
  );
};

const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chat = useChat();
  const user = useUser();

  const inputRef = useFocus();

  if (!chat) return;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const newMessage: IMessage = {
      id: uuid4(),
      body: messageText,
      sender: user,
      createdAt: new Date(),
    };

    try {
      await sendMessage(newMessage);

      chat.setMessage(newMessage);

      setMessageText("");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <input
          ref={inputRef}
          className="w-full border p-2 focus:outline-gray-400"
          placeholder="Message #channel"
          type="text"
          onChange={handleChange}
          value={messageText}
          disabled={isLoading}
        />
        <Button
          className="bg-green-700 transition hover:bg-green-700/80 disabled:bg-gray-500"
          type="submit"
          size="icon"
          disabled={!messageText.length || isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <SendHorizontal absoluteStrokeWidth />
          )}
        </Button>
      </div>
    </form>
  );
};

export default ChatWindow;
