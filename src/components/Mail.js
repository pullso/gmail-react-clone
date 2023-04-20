import React from "react";
import "./Mail.css";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {
  ArrowBackOutlined,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInboxOutlined,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectOpenMail} from "../features/mailSlice";

const Mail = () => {
  const navigate = useNavigate();
  const {title, subject, description, time} = useSelector(selectOpenMail)

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlined/>
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined/>
          </IconButton>
          <IconButton>
            <Error/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <Email/>
          </IconButton>
          <IconButton>
            <WatchLater/>
          </IconButton>
          <IconButton>
            <CheckCircle/>
          </IconButton>
          <IconButton>
            <LabelImportant/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore/>
          </IconButton>
          <IconButton>
            <Print/>
          </IconButton>
          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{subject}</h2>
          <LabelImportant className="mail__important"/>
          <p>{title}</p>
          <p className="mail__time">{time}</p>
        </div>
        <div className="mail__message">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
