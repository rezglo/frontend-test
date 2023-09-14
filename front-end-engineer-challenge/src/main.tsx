import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cookies from "universal-cookie";

import Home from "./pages/Home.tsx";

import "./global.css";
import SignIn from "./pages/SignIn.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import { signInAction, chatAction } from "@/lib/actions.ts";
import ChatWindow from "./components/ChatWindow.tsx";
import GlobalContextProvider from "./context/globalContext.tsx";

const cookies = new Cookies();

const isAuthenticated = cookies.get("authenticated");

const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated ? <Home /> : <LandingPage />,
    action: chatAction,
  },
  {
    path: "/signin",
    element: <SignIn />,
    action: signInAction,
  },
  {
    path: "/app",
    element: <Home />,
    action: chatAction,
    children: [
      {
        path: "room/:roomId",
        element: <ChatWindow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
