import React, { useState } from "react";
import { connect } from "react-redux";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import { deleteProjects, setCurrent } from "../../actions/projects";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(0),
  },
}));

const ProjectItem = ({ setopen, project, deleteProjects, setCurrent }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleDelete = () => {
    deleteProjects(project.id);
    // history.push("/home");
  };

  return (
    <ListItem button onClick={() => setCurrent(project)} key={project.id}>
      <ListItemIcon className={classes.list}>
        <AssignmentSharpIcon />
      </ListItemIcon>
      <ListItemText primary={project.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="more" onClick={handleClick}>
          <MoreHorizOutlinedIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              setCurrent(project);
              setopen(true);
            }}
          >
            Update
          </MenuItem>
          <MenuItem onClick={() => handleDelete()}>Delete</MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect(null, { deleteProjects, setCurrent })(ProjectItem);
