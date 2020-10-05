import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import Tooltip from "@material-ui/core/Tooltip";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const TopBar = styled(AppBar)`
  && {
    background: ${(props) => props.theme.colors.background};
    transition: background 0.3s;
    box-shadow: none;
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primaryColor};
  @media (max-width: 768px) {
    justify-content:start;
    width: 400px;
  }
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    display: none;
  }
`;
const SwitchHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 5px 8px ${(props) => props.theme.colors.shadow};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 1s;
  transition: color 0.5s;
  color: ${(props) => props.theme.colors.primaryColor};
  @media (max-width: 768px) {
    margin-left: 63vw;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primaryColor};
  }
`;

function Header({
  isDarkMode,
  setIsDarkMode,
  open,
  handleDrawerOpen,
  classes,
}) {
  return (
    <TopBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <HeaderWrapper>
          <Title>Dashboard</Title>

          <Searchbar />

          <Tooltip title="Switch Mode" arrow>
            <SwitchHolder
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("isDarkMode", !isDarkMode);
              }}
            >
              <BrightnessMediumIcon />
            </SwitchHolder>
          </Tooltip>
        </HeaderWrapper>
      </Toolbar>
    </TopBar>
  );
}

export default Header;
