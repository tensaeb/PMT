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
}));

const SidebarItems = ({ logout, isAuthenticated }) => {
  const classes = useStyles();

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

  return (
    <div>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary="Secondary text" />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-haspopup="true"
              aria-label="more"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>

            <Menu
              id="menu-list-grow"
              anchorEl={anchorEl}
              keepMounted
              open={anchorEl}
              onClose={handleClose}
              TransitionComponent={Fade}
              // getContentAnchorEl={null}
              // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              // transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />

      {/* completed task and open task */}

      <Box display="flex" flexDirection="row" className={classes.box}>
        <Box flexDirection="column" m={1}>
          <Typography variant="h6">378</Typography>
          <Typography variant="caption">Completed Tasks</Typography>
        </Box>
        <Box flexDirection="column" m={1}>
          <Typography variant="h6">22</Typography>
          <Typography variant="caption">Open Tasks</Typography>
        </Box>
      </Box>

      {/* Menus */}

      <Box display="flex" flexDirection="column" className={classes.menu}>
        <Typography className={classes.menuButtons} variant="caption">
          MENUS
        </Typography>
        <Button className={classes.menuButtons} fullWidth>
          Home
        </Button>
        <Button className={classes.menuButtons} fullWidth>
          My Task
        </Button>
        <StyledBadge color="primary" badgeContent={6}>
          <Button fullWidth className={classes.menuButtons}>
            Notification
          </Button>
        </StyledBadge>
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
        >
          <IconButton aria-label="add" size="small">
            <AddIcon color="secondary" fontSize="inherit" />
          </IconButton>
          Add Project
        </Button>
        <AddProjectDialog Open={Open} setopen={setopen} />
      </Box>

      {/* Teams */}

      {/* <Box className={classes.projects}>
        <Typography className={classes.menuButtons} variant="caption">
          TEAMS
        </Typography>
        <Teams />

        <Button
          color="secondary"
          className={classes.button}
          style={{ backgroundColor: "transparent" }}
          disableRipple
          onClick={() => handleClickOpen()}
        >
          <IconButton aria-label="add" size="small">
            <AddIcon color="secondary" fontSize="inherit" />
          </IconButton>
          Add Team
        </Button>
        <AddTeamDialog open={open} setOpen={setOpen} />
      </Box>
      <FormControl component="fieldset" className={classes.darkmode}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Dark Mode"
          labelPlacement="start"
        />
      </FormControl> */}
      <Box>
        <FormControl component="fieldset" className={classes.darkmode}>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Dark Mode"
            labelPlacement="start"
          />
        </FormControl>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(SidebarItems);
