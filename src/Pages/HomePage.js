import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";

import NavBar from "../Components/Home/Components/NavBar";
import SideBar from "../Components/Home/Components/SideBar";
import Main from "../Components/Home/Components/Main";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <NavBar onClick={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SideBar onClose={handleDrawerToggle} open={mobileOpen} />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main />
      </main>
    </div>
  );
};

export default HomePage;
