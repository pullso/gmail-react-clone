import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";

import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsSendMessageOpen} from "./features/mailSlice";
import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";

function App() {
  const isSendMessageOpen = useSelector(selectIsSendMessageOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, []);


  return (
    !user ? (<Login/>) :
      (<div className="app">
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Outlet/>
        </div>
        {isSendMessageOpen && <SendMail/>}
      </div>)
  )
}

export default App;
