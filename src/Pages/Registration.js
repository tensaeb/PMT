import React from "react";

import { CssBaseline, Grid, makeStyles } from "@material-ui/core";

import RegistrationForm from "../Components/Forms/RegistrationForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "130vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const Registration = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <RegistrationForm />
    </Grid>
  );
};

export default Registration;
