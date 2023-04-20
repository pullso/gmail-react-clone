import React from "react";
import "./Header.css";
import {Menu as MenuIcon} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Avatar, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";


const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signOutApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout())
      })
      .catch(e => console.error(e.message))

  }

  return (<div className="header">
    <div className="header__left">
      <IconButton>
        <MenuIcon/>
      </IconButton>
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
        alt=""
      />
    </div>
    <div
      className="header__middle
      "
    >
      <SearchIcon/>
      <input type="text" placeholder="Search email"/>
      <ArrowDropDownIcon/>
    </div>
    <div className="header__right">
      <IconButton>
        <AppsIcon/>
      </IconButton>
      <IconButton>
        <NotificationsIcon/>
      </IconButton>
      <Avatar
        onClick={signOutApp}
        src={user?.photoUrl}/>
    </div>
  </div>);
};

export default Header;
