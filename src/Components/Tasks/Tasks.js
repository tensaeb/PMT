import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getTasks } from "../../actions/tasks";

import {
  Typography,
  Box,
  makeStyles,
  Button,
  IconButton,
  List,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import TaskItem from "./TaskItem";
import AddTasks from "./AddTasks";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  loading: {
    padding: theme.spacing(2),
  },
}));

const Tasks = ({ tasks, getTasks }) => {
  const classes = useStyles();
  const [Open, setopen] = useState(false);

  const HandleClickOpen = () => {
    setopen(true);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" className={classes.titleBox}>
          <Typography variant="h5" className={classes.titleBox}>
            TASKS
          </Typography>
          <Button
            size="small"
            color="secondary"
            style={{ backgroundColor: "transparent" }}
            disableRipple
            onClick={() => HandleClickOpen()}
          >
            <IconButton aria-label="add" size="small">
              <AddIcon color="secondary" fontSize="inherit" />
            </IconButton>
            Add Task
          </Button>
          <AddTasks Open={Open} setopen={setopen} />
        </Box>
        <Box display="flex" flexDirection="column">
          <List>
            {tasks ? (
              tasks.map((task) => <TaskItem task={task} />)
            ) : (
              <Typography variant="h6" className={classes.loading}>
                Loading ...
              </Typography>
            )}
          </List>
        </Box>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.task,
  };
};

export default connect(mapStateToProps, { getTasks })(Tasks);
