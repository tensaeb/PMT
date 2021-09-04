import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadUser } from "../actions/loadUser";
import { chechAuthenticated } from "../actions/chechAuthenticated";

// import { chechAuthenticated, loadUser } from "../actions/auth";

import { CssBaseline, Paper, Grid, makeStyles } from "@material-ui/core";

import LoginForm from "../Components/Forms/LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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

const Login = ({ chechAuthenticated, loadUser }) => {
  const classes = useStyles();

  useEffect(() => {
    chechAuthenticated();
    loadUser();
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default connect(null, { chechAuthenticated, loadUser })(Login);
