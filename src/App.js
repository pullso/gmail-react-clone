import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Outlet />
      </div>
      <SendMail />
    </div>
  );
}

export default App;
