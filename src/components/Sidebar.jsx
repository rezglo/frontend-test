import React, { useEffect } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { Add, ExpandMore } from "@mui/icons-material";
import {
  fetchChannelsAsync,
  selectChannels,
  selectUsers,
  fetchUsersAsync,
} from "../features/appSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const users = useSelector(selectUsers);
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelsAsync());
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <SidebarContainer>
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add channel" />
      {channels?.map(
        (channel) =>
          !("username" in channel) && (
            <SidebarOption
              channel
              key={channel.id}
              id={channel.id}
              title={channel.name}
            />
          )
      )}
      <hr />
      <SidebarOption Icon={ExpandMore} title="Users" />
      {users?.map((user) => (
        <SidebarOption key={user.id} id={user.id} title={user.name} />
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
