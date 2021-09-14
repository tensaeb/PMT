import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Button,
  Divider,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreRoundedIcon from "@material-ui/icons/MoreRounded";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrent } from "../../actions/tasks";
import UpdateTask from "./UpdateTask";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    flexGrow: 1,
    marginBottom: "10px",
  },
  title: {
    flexGrow: 1,
    marginBottom: "3vh",
    width: 1,
  },
  span: {
    marginTop: "-4vh",
    marginBottom: "30px",
  },
  box: {
    flexGrow: 1,
  },
  divider: {
    margin: "20px 0px 20px 0px",
  },
}));

const TaskDesc = ({ current, tasks }) => {
  const classes = useStyles();
  const moment = require("moment");
  const moments = moment(new Date(current && current.due));

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <Box display="flex" flexDirection="row" className={classes.titleBox}>
        <Typography variant="h5" className={classes.title}>
          {current && current.title}
        </Typography>

        <IconButton edge="end" aria-label="more" onClick={handleClick}>
          <MoreRoundedIcon color="secondary" style={{ marginTop: 11 }} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={false}
          keepMounted
          open={anchorEl}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              setCurrent(tasks);
              setOpen(true);
            }}
            // onClick={() => handleClose()}
          >
            Update
          </MenuItem>
          <MenuItem
            // onClick={() => handleDelete()}
            onClick={() => handleClose()}
          >
            Delete
          </MenuItem>
        </Menu>
      </Box>
      <Box className={classes.span}>
        <Typography variant="caption">
          Added by {current && current.dev} yesterday at 12:41pm
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" className={classes.box}>
        <Box flexDirection="column" className={classes.box}>
          <Typography variant="h6">Assign</Typography>
          <Typography variant="caption">{current && current.dev}</Typography>
        </Box>
        <Box flexDirection="column" className={classes.box}>
          <Typography variant="h6">Due On</Typography>
          <Typography variant="caption">
            {moments.format("MMMM, DD, YYYY")}
          </Typography>
        </Box>
        <Box flexDirection="column">
          <Typography variant="h6">Status</Typography>
          <Typography variant="caption" style={{ color: "red" }}>
            {current && current.status}
          </Typography>
        </Box>
        {/* <Box flexDirection="column" className={classes.box}>
          <Typography variant="h6">22</Typography>
          <Typography variant="caption">Open Tasks</Typography>
        </Box> */}
      </Box>
      <Divider className={classes.divider} />
      <Typography variant="h6">description</Typography>
      <Typography variant="body2" align="justify">
        {current && current.instruction}
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6">Git Link</Typography>
      <Link to={current && current.giturl} variant="body2" align="justify">
        {current && current.url}
      </Link>
      <UpdateTask open={open} setOpen={setOpen} />
    </>
  );
};
TaskDesc.prototype = {
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.task,
  current: state.tasks.current,
});

export default connect(mapStateToProps)(TaskDesc);
