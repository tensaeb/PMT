import React from "react";

import {
  Divider,
  Drawer,
  Hidden,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import SidebarItems from "./SidebarItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    marginTop: theme.spacing(14),
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const SideBar = ({ onClose, open, window }) => {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <SidebarItems />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.toolbar}
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.toolbar}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default SideBar;
