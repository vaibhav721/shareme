import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./container/Home";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/login");
  }, []);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      {/* Double click the component and then give ctrl+space<- This will import the component to App.js */}
    </Routes>
  );
}

export default App;
