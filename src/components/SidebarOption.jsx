import React from "react";
import styled from "styled-components";

function SidebarOption(props) {
  return <SidebarOptionContainer>
    {props.Icon && <props.Icon fontSize="small" style={{ padding: 10 }} />}
  </SidebarOptionContainer>;
}

export default SidebarOption;

const SidebarOptionContainer = styled.div``;
