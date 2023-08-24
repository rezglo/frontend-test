import React from "react";
import styled from "styled-components";
import {
  postChannelAsync,
  enterChannel,
  fetchChannelByIdAsync,
} from "../features/appSlice";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function SidebarOption(props) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channel = prompt("Please provide a channel");
    const data = {
      name: channel,
      messages: [],
    };
    if (channel) {
      dispatch(postChannelAsync(data));
    }
  };

  const selectChannel = () => {
    if (props.id) {
      dispatch(enterChannel(props.id));
      dispatch(fetchChannelByIdAsync(props.id));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={props.addChannelOption ? addChannel : selectChannel}
    >
      {props.Icon && <props.Icon fontSize="small" style={{ padding: 10 }} />}
      {props.Icon ? (
        <h3>{props.title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {props.title}
          {props.channel && <IconButton size="small" className="optionButton">
            <DeleteIcon className="optionIcon" fontSize="inherit" />
          </IconButton>}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  .optionButton {
    color: white;
    display: none;
    margin-left: 80px;
    background: none;
    height: 12px;
    width: 12px;
    padding: 0;
  }

  &:hover .optionButton {
    display: inline-flex;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
