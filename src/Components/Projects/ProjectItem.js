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
import { deleteConfirmMessage } from "../../actions/confirmDelete";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(0),
  },
}));

const ProjectItem = ({
  setopen,
  project,
  deleteProjects,
  setCurrent,
  confirmMessage,
  deleteConfirm,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleDelete = (item) => {
    // if (confirmMessage) {
    //   return;
    // } else {
    //   deleteConfirm(item);
    // }
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

const mapStateToProps = (state) => ({
  confirmMessage: state.confirmDelete.confirmMessage,
});
// const mapDispatchToProps = (dispatch) => ({
//   deleteConfirmMessage: (item) => dispatch(deleteConfirmMessage(item)),
// });

export default connect(mapStateToProps, {
  deleteProjects,
  setCurrent,
  deleteConfirmMessage,
})(ProjectItem);
