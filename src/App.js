import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}>
          </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
