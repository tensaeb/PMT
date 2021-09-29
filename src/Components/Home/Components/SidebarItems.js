import React, { useState, useRef } from "react";

import { connect } from "react-redux";

import {
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Divider,
  IconButton,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  Fade,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImageIcon from "@material-ui/icons/Image";
import StyledBadge from "./StyledBadge";

import AddIcon from "@material-ui/icons/Add";

import Projects from "../../Projects/Projects";
import AddProjectDialog from "../../Projects/AddProjectDialog";
import { logout } from "../../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "15px 0px 0px 10px",
  },
  menu: {
    margin: "25px 0px 0px 1px",
  },
  menuButtons: {
    justifyContent: "flex-start",
    padding: "0px 0px 10px 15px",
  },
  button: {
    textTransform: "capitalize",
    margin: "-5px 0px 0px 10px",
  },

  exsmall: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  projects: {
    padding: "25px 0px 0px 3px",
  },
  darkmode: {
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userDet: {
    padding: theme.spacing(0, 0, 0, 2),
  },
  userName: {
    fontWeight: "900",
    // fontSize: "15px",
  },
}));

const SidebarItems = ({ logout, isLoggedIn, currentUser }) => {
  const classes = useStyles();

  const history = useHistory();

  const route = () => {
    let path = `/home/profile/`;
    history.push(path);
  };

  const [Open, setopen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  const HandleClickOpen = () => {
    setopen(true);
  };

  const handleClick = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  if (isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar id="username"
              alt={
                currentUser &&
                currentUser.first_name + " " + currentUser.last_name
              }
              src={currentUser && currentUser.img}
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.userDet}
            primary={
              <Typography variant="h6" className={classes.userName}>
                {currentUser &&
                  currentUser.first_name + " " + currentUser.last_name}
              </Typography>
            }
            secondary={
              <Typography variant="body2FF">
                {currentUser && currentUser.role}
              </Typography>
            }
          />
          {/* <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-haspopup="true"
              aria-label="more"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={anchorEl}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </ListItemSecondaryAction> */}
        </ListItem>
      </List>
      <Divider />

      {/* completed task and open task */}

      <Box display="flex" flexDirection="row" className={classes.box}>
        {/* <Box flexDirection="column" m={1}>
          <Typography variant="h6">378</Typography>
          <Typography variant="caption">Completed Tasks</Typography>
        </Box>
        <Box flexDirection="column" m={1}>
          <Typography variant="h6">22</Typography>
          <Typography variant="caption">Open Tasks</Typography>
        </Box> */}
      </Box>

      {/* Menus */}

      <Box display="flex" flexDirection="column" className={classes.menu}>
        <Typography className={classes.menuButtons} variant="caption" id="menu">
          MENUS
        </Typography>
        <Button onClick={route} className={classes.menuButtons} fullWidth>
          Profile
        </Button>
        {/* <Button className={classes.menuButtons} fullWidth>
          My Task
        </Button> */}

        <Button onClick={logout} fullWidth className={classes.menuButtons} id="logoutbtn">
          Logout
        </Button>
      </Box>

      {/* Projects */}

      <Box className={classes.projects}>
        <Typography className={classes.menuButtons} variant="caption">
          PROJECTS
        </Typography>
        <Projects />
        <Button
          color="secondary"
          className={classes.button}
          style={{ backgroundColor: "transparent" }}
          disableRipple
          onClick={() => HandleClickOpen()}
          id="addprobtn"
        >
          <IconButton aria-label="add" size="small">
            <AddIcon color="secondary" fontSize="inherit" />
          </IconButton>
          Add Project
        </Button>
        <AddProjectDialog Open={Open} setopen={setopen} />
      </Box>

      {/* <Box>
        <FormControl component="fieldset" className={classes.darkmode}>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Dark Mode"
            labelPlacement="start"
          />
        </FormControl>
      </Box> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.isLoggedIn,
  currentUser: state.Authentication.currentUser,
});

export default connect(mapStateToProps, { logout })(SidebarItems);
