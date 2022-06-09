import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";

function App() {
  const URL = "http://localhost:3000";
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;