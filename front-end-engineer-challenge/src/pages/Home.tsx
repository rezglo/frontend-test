import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default Home;
