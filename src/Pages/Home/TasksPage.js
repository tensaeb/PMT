import React from "react";
import {
  Paper,
  Typography,
  Box,
  makeStyles,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TaskList from "../../Components/Tasks/TaskList";
import TaskDesc from "../../Components/Tasks/TaskDesc";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    padding: theme.spacing(2),
  },
  papertwo: {
    // width: "80%",
    padding: theme.spacing(2),
  },
  titleBox: {
    flexGrow: 1,
    marginBottom: "10px",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: "80px 20px 20px 0",
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    paddingLeft: "20px",
  },
}));

const TasksPage = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection="row"
                className={classes.titleBox}
              >
                <Typography variant="h6" className={classes.titleBox}>
                  Backlog
                </Typography>
                <Button
                  size="small"
                  color="secondary"
                  style={{ backgroundColor: "transparent" }}
                  disableRipple
                >
                  <IconButton aria-label="add" size="small">
                    <AddIcon color="secondary" fontSize="inherit" />
                  </IconButton>
                  Add Task
                </Button>
              </Box>
              <Box display="flex" flexDirection="column">
                <TaskList />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.papertwo}>
            <Box display="flex" flexDirection="column">
              <TaskDesc />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};

export default TasksPage;
