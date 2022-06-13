import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./pages/Register"
import {Route, Routes} from "react-router-dom";
import Login from './pages/Login'
import UserProfile from "./pages/UserProfile";
import Posts from "./pages/Posts";
import SinglePostPage from "./pages/SinglePostPage";
import Home from "./pages/Home";
function App() {
  const URL = "http://localhost:3000";
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;