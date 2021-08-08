import React, { useEffect, useRef, useState } from "react";
import NavBarItems from "./NavBarItems";

import { makeStyles, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbarTransp: {
    backgroundColor: "rgba(67, 129, 168, 0)",
  },
  appBarSolid: {
    backgroundColor: "rgba(67, 129, 168, 1)",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  //Changing the Appbar background color when scrolling
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appbarTransp");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={classes[navRef.current]}
        position="fixed"
      >
        <Toolbar>
          <NavBarItems />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
