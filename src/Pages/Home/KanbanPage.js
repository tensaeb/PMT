import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

// import { DragDropContext, Droppable } from "react-beautiful-dnd";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    padding: "68px 0px 0px 20px",
  },
  paper: {
    padding: theme.spacing(3),
    // marginBottom: theme.spacing(),
    textAlign: "center",
  },
  card: {
    marginBottom: 22,
  },
}));

const KanbanPage = () => {
  const classes = useStyles();
  return (
    // <DragDropContext onDragEnd={this.onDragEnd}>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={2} width={1}>
        <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" style={{ marginBottom: 30 }}>
              Title
            </Typography>

            {/* <Droppable droppableId> */}
            {/* {(provided) => ( */}
            <Card className={classes.card}>
              <CardContent>
                <Typography align="left">
                  E-mail after registration so that I can confirm my
                </Typography>
                <Typography variant="body2" color="textSecondary" align="left">
                  Due date: 24 Oct
                </Typography>
              </CardContent>
            </Card>
            {/* )} */}
            {/* </Droppable> */}

            <Card className={classes.card}>
              <CardContent>
                <Typography align="left">
                  E-mail after registration so that I can confirm my
                </Typography>
                <Typography variant="body2" color="textSecondary" align="left">
                  Due date: 24 Oct
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5">Title</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5">Title</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5">Title</Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs>
          <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5">Title</Typography>
          </Paper>
        </Grid> */}
      </Grid>
    </main>
    // </DragDropContext>
  );
};

export default KanbanPage;
