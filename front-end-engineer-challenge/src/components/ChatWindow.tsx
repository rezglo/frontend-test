import React, { useState } from "react";
import { Loader2, SendHorizontal, User } from "lucide-react";
import format from "date-fns/format";
import { v4 as uuid4 } from "uuid";

import useChat from "@/hooks/useChat";
import { Message as IMessage } from "@/types";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import useUser from "@/hooks/useUser";
import { sendMessage } from "@/services/post";

const ChatWindow: React.FC = () => {
  const chat = useChat();

  if (!chat) return;

  return (
    <section className="flex-1 py-3">
      <div className="flex flex-col h-full">
        <header className="py-2 px-5">
          <h3 className="text-lg font-bold">{chat.name}</h3>
        </header>

        <Separator className="my-3" />

        <div className="flex-1">
          <div className="flex flex-col justify-end gap-2 h-full p-5">
            {chat.messages.map((item) => (
              <Message key={item.id} messageData={item} />
            ))}
          </div>
        </div>

        <div className="px-5">
          <MessageInput />
        </div>
      </div>
    </section>
  );
};

const Message: React.FC<{ messageData: IMessage }> = ({ messageData }) => {
  const time = format(messageData.createdAt, "p");
  return (
    <div className="flex items-center gap-3">
      <User
        fill="white"
        size={36}
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
  );
};

const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chat = useChat();
  const user = useUser();

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
