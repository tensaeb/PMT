import React from "react";
import { Paper, Box, makeStyles, Grid } from "@material-ui/core";

import TaskDesc from "../../Components/Tasks/TaskDesc";
import Tasks from "../../Components/Tasks/Tasks";

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
            <Tasks />
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
