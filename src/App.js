import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./pages/Register"
import {Route, Routes} from "react-router-dom";

function App() {
  const URL = "http://localhost:3000";
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;