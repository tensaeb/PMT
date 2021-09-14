import React from "react";

import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
    // maxWidth: "30%",
  },
}));

const Cards = ({ item, index }) => {
  const classes = useStyles();

  const moment = require("moment");
  const moments = moment(new Date(item && item.due));

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography align="left">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary" align="left">
                Due date: {moments.format("MMMM, DD, YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Cards;
