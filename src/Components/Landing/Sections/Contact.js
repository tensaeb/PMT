import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "1000px",
    backgroundColor: "#E5E5E5",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  contact: {
    padding: theme.spacing(10, 0, 0, 20),
  },
  contactCaption: {
    width: "55%",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        alignItems="center"
        spacing={10}
        className={classes.contact}
      >
        <Grid item>
          <Typography variant="h2" align="left">
            Get In Touch
          </Typography>
          <Typography variant="body1" className={classes.contactCaption}>
            Hey! We are looking forward to start a project with you
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
