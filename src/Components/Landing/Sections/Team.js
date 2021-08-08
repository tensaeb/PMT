import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "1000px",
    backgroundColor: "Red",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const Team = () => {
  const classes = useStyles();
  return <div id="team" className={classes.root}></div>;
};

export default Team;
