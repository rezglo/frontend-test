import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <AppBoddy>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />}></Route>
            </Routes>
          </AppBoddy>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBoddy = styled.div`
  display: flex;
  height: 100vh;
`;
