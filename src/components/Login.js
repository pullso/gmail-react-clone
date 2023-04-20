import React from 'react';
import './Login.css'
import {Button} from "@mui/material";
import {auth, provider} from "../firebase";
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";
import {signInWithPopup} from 'firebase/auth'

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({user}) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      })
      .catch(e => console.error(e.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="gmail logo"/>

        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
