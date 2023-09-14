import React, { useState } from "react";
import { Separator } from "./ui/separator";
import { Form } from "react-router-dom";
import { Button } from "./ui/button";
import { SendHorizontal, User } from "lucide-react";

const ChatWindow: React.FC = () => {
  return (
    <section className="flex-1 py-3">
      <div className="flex flex-col h-full">
        <header className="py-2 px-5">
          <h3 className="text-lg font-bold">#channelName</h3>
        </header>

        <Separator className="my-3" />

        <div className="flex-1">
          <div className="flex flex-col justify-end gap-2 h-full p-5">
            <Message />
            <Message />
            <Message />
          </div>
        </div>

        <div className="px-5">
          <MessageInput />
        </div>
      </div>
    </section>
  );
};

const Message: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <User
        fill="white"
        size={36}
        className="flex-shrink-0 rounded bg-primary text-primary-foreground"
      />
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold">Nelson Javier Aldazabal Hernandez</span>
          <small className="text-gray-500">12:43 pm</small>
        </div>
        <span>Hello, team!</span>
      </div>
    </div>
  );
};

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Form method="post">
      <div className="flex items-center gap-4">
        <input
          className="w-full border p-2 focus:outline-gray-400"
          placeholder="Message #channel"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <Button
          className="bg-green-700 transition hover:bg-green-700/80 disabled:bg-gray-500"
          type="submit"
          size="icon"
          disabled={!message.length}
        >
          <SendHorizontal absoluteStrokeWidth />
        </Button>
      </div>
    </Form>
  );
};

export default ChatWindow;
