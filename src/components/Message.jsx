import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

function Message({ message, timestamp, user, userImage }) {
  const currentUser = useSelector(selectUser);
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{timestamp}</span>
        </h4>
        <p>
          {message}
          <MessageToolBar>
            {currentUser.name === user && (
              <IconButton
                className="editButton"
                size="small"
                aria-label="delete"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            )}
            <IconButton size="small" aria-label="delete">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </MessageToolBar>
        </p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    width: 50px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const MessageToolBar = styled.span`
  margin-left: 40px;
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }

  > p {
    height: 30px;
  }

  .MuiButtonBase-root {
    display: none;
    padding: 0;
    width: 25px;
    height: 25px;
  }

  &:hover .MuiButtonBase-root {
    display: inline-flex;
  }

  .editButton {
    margin-right: 10px;
  }
`;
