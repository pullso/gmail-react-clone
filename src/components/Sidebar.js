import React from 'react';
import './Sidebar.css'
import {Button, IconButton} from "@mui/material";
import SidebarOption from "./SidebarOption";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star
} from "@mui/icons-material";

const Sidebar = () => {
  return (<div className="sidebar">
    <Button
      startIcon={<Add fontSize='large'/>}
      className='sidebar__compose'
    >
      Compose
    </Button>
    <SidebarOption Icon={Inbox} title='Inbox' number={42} selected={true}/>
    <SidebarOption Icon={Star} title='Starred' number={42}/>
    <SidebarOption Icon={AccessTime} title='Snoozed' number={42}/>
    <SidebarOption Icon={LabelImportant} title='Important' number={42}/>
    <SidebarOption Icon={NearMe} title='Sent' number={42}/>
    <SidebarOption Icon={Note} title='Drafts' number={42}/>
    <SidebarOption Icon={ExpandMore} title='More' number={42}/>

    <div className="sidebar__footer">
      <div className="sidebar__footerIcons">
        <IconButton><Person/></IconButton>
        <IconButton><Duo/></IconButton>
        <IconButton><Phone/></IconButton>
      </div>
    </div>
  </div>);
};

export default Sidebar;
