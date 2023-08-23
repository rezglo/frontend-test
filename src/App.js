import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <AppBoddy>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />}></Route>
          </Routes>
        </AppBoddy>
      </Router>
    </div>
  );
}

export default App;

const AppBoddy = styled.div`
  display: flex;
  height: 100vh;
`;
