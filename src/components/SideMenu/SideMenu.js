import React from "react";
import styled from "styled-components";
import NavigationMenu from "./NavigationMenu";
import User from "./User";

const SideMenuWrapper = styled.div`
  height: 85vh;
  margin-top: 15px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  bottom: 0;
  display: flex;
  padding: 36px 0 15px 14px;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

function SideMenu() {
  return (
    <SideMenuWrapper>
      <NavigationMenu />
      <User />
    </SideMenuWrapper>
  );
}

export default SideMenu;
