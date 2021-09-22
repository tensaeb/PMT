import React, { useEffect } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Cards from "./Cards";
import { getTasks } from "../../actions/tasks";
import { connect } from "react-redux";

import { Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    // marginBottom: theme.spacing(),
    textAlign: "center",
  },
  Grid: {
    margin: theme.spacing(1),
    width: 250,
    maxWidth: "none",
  },
}));

const PendingLists = ({ columnId, column, index }) => {
  const classes = useStyles();
  // const id = tasks && tasks.map((task) => task.id);

  return (
    <div>
      <Grid item xs className={classes.Grid}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" style={{ marginBottom: 30 }}>
            {column.name}
          </Typography>
          <Droppable droppableId={columnId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {column.items &&
                  column.items.map((item, index) => (
                    <Cards item={item} key={item.id} index={index} />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Paper>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.task,
  };
};

export default connect(mapStateToProps, { getTasks })(PendingLists);
