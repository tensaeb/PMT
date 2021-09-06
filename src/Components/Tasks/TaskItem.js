import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

import { connect } from "react-redux";

import { setCurrent, clearCurrent } from "../../actions/tasks";

const TaskItem = ({ task, setCurrent }) => {
  return (
    <>
      <ListItem button p={3} onClick={() => setCurrent(task)}>
        <ListItemText primary={task.instruction} />
      </ListItem>
    </>
  );
};

export default connect(null, { setCurrent })(TaskItem);
