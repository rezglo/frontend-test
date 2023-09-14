import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";

import "./global.css";
import SignIn from "./pages/SignIn.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import { signInAction, chatAction } from "@/lib/actions.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
