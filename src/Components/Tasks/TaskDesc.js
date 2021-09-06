import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Button,
  Divider,
} from "@material-ui/core";
import MoreRoundedIcon from "@material-ui/icons/MoreRounded";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrent } from "../../actions/projects";

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

const TaskDesc = ({ current }) => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" flexDirection="row" className={classes.titleBox}>
        <Typography variant="h5" className={classes.title}>
          {current && current.instruction}
        </Typography>

        <MoreRoundedIcon color="secondary" style={{ marginTop: 11 }} />
      </Box>
      <Box className={classes.span}>
        <Typography variant="caption">
          Added by {current && current.developer} yesterday at 12:41pm
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" className={classes.box}>
        <Box flexDirection="column" className={classes.box}>
          <Typography variant="h6">Assign</Typography>
          <Typography variant="caption">
            {current && current.developer}
          </Typography>
        </Box>
        <Box flexDirection="column" className={classes.box}>
          <Typography variant="h6">Due On</Typography>
          <Typography variant="caption">{current && current.due}</Typography>
        </Box>
        <Box flexDirection="column">
          <Typography variant="h6">Status</Typography>
          <Typography variant="caption" style={{ color: "red" }}>
            Doing
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
        Task Descriptions are used during project planning, project execution
        and project control. During project planning the task descriptions are
        used for scope planning and creating estimates. During project execution
        the task description is used by those doing the activities to ensure
        they are doing the work correctly.
      </Typography>
      <Divider className={classes.divider} />
    </>
  );
};
TaskDesc.prototype = {
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.tasks.current,
});

export default connect(mapStateToProps)(TaskDesc);
