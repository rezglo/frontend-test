import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
