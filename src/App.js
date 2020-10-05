import React, { useState } from "react";
import "./App.css";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/Header/Header";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Dashboard from "./Containers/Dashboard";
import { useStyles } from "./components/ViewStyles";
import Overview from "./Containers/Overview";
import Stats from "./Containers/Stats";
import Settings from "./Containers/settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Globalstyle = createGlobalStyle`
  body {
  background: ${(props) => props.theme.colors.background};
  transition: background 0.3s;
  }
`;

const AppDrawer = styled(Drawer)`
  && {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primaryColor};
    height: 100vh;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
`;

const CloseIcon = styled(ChevronLeftIcon, ChevronRightIcon)`
  && {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

export default function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
          <Globalstyle />
          <CssBaseline />

          <Header
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            classes={classes}
          />

          <AppDrawer
            onMouseOver={handleDrawerOpen}
            onMouseLeave={handleDrawerClose}
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <CloseIcon />
                )}
              </IconButton>
            </div>

            <SideMenu />
          </AppDrawer>

          <ContentWrapper>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/Overview" component={Overview} />
              <Route path="/Statistics" component={Stats} />
              <Route path="/Settings" component={Settings} />
            </Switch>
          </ContentWrapper>
        </ThemeProvider>
      </div>
    </Router>
  );
}
