import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { ExpandMore } from "@mui/icons-material";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarOption Icon = {ExpandMore} title="Channels"/>
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
`;
