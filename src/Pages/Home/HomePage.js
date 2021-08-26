import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";

import NavBar from "../../Components/Home/Components/NavBar";
import SideBar from "../../Components/Home/Components/SideBar";
import Main from "./TasksPage";

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
    </div>
  );
};

export default HomePage;
