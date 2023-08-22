import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { Add, ExpandMore } from "@mui/icons-material";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarOption Icon = {ExpandMore} title="Channels"/>
      <hr />
      <SidebarOption Icon = {Add} title="Add channel" />
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
