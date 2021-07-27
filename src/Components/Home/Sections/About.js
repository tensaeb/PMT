import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "1000px",
    backgroundColor: "yellow",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const About = () => {
  const classes = useStyles();
  return <div id="about" className={classes.root}></div>;
};

export default About;
