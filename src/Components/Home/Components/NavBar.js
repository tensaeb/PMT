import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  CssBaseline,
  Toolbar,
  makeStyles,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  tabs: {
    padding: theme.spacing(5, 0, 0, 0),
  },
}));

const NavBar = ({ onClick }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar> */}
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          // aria-label=" simple tabs example"
        >
          <Tab label="Home" component={Link} to="/home/index" />
          <Tab label="Kanban" component={Link} to="/home/kanban" />
          {/* <Tab label="Calendar" component={Link} to="/home/calendar" /> */}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default NavBar;
