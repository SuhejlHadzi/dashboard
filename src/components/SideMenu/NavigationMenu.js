import React from "react";
import NavigationMenuButtons from "./NavigationMenuButtons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 0 50px 50px 0;
  margin-bottom: 1px;
  text-decoration: none;
  &.active {
    background: ${(props) => props.theme.colors.accentColor};
    color: #fff;
  }
  &:hover {
    background: ${(props) => props.theme.colors.accentColor};
    color: #fff;
    cursor: pointer;
  }
`;

function NavigationMenu() {
  return (
    <NavWrapper>
      <Link to="/" exact>
        <NavigationMenuButtons
          icon={<DashboardIcon fontSize="small" />}
          name="Dashboard"
        />
      </Link>

      <Link to="/Overview">
        <NavigationMenuButtons
          icon={<AssignmentIcon fontSize="small" />}
          name="Overview"
        />
      </Link>
      <Link to="/Statistics">
        <NavigationMenuButtons
          icon={<AssessmentIcon fontSize="small" />}
          name="Statistics"
        />
      </Link>
      <Link to="/Settings">
        <NavigationMenuButtons
          icon={<SettingsIcon fontSize="small" />}
          name="Settings"
        />
      </Link>
    </NavWrapper>
  );
}

export default NavigationMenu;
