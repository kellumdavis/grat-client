import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./pages/Register"
import {Route, Routes} from "react-router-dom";
import Login from './pages/Login'
import UserProfile from "./pages/UserProfile";
function App() {
  const URL = "http://localhost:3000";
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;