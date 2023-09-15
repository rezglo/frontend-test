import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { signInAction, chatAction } from "@/lib/actions.ts";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/SignIn.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import ChatWindow from "./components/ChatWindow.tsx";
import GlobalContextProvider from "./context/globalContext.tsx";
import EmptyState from "./components/EmptyState.tsx";
import { cookies } from "./lib/auth.ts";

import "./global.css";

const isAuthenticated = cookies.get("authenticated");

const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated ? <Navigate to="/app" replace /> : <LandingPage />,
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
      { index: true, element: <EmptyState /> },
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
