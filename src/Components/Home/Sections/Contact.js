import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "1000px",
    backgroundColor: "blue",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return <div id="contact" className={classes.root}></div>;
};

export default Contact;
