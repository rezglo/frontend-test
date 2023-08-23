import React, { useEffect } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { Add, ExpandMore } from "@mui/icons-material";
import { fetchChannelsAsync, selectChannels } from "../features/appSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchChannelsAsync());
  }, [dispatch]);

  return (
    <SidebarContainer>
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add channel" />
      {channels?.map((channel) => (
        <SidebarOption key={channel.id} id={channel.id} title={channel.name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;

  > hr {
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #49274b;
  }
`;
