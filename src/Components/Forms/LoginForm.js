import React, { useState } from "react";
import { login } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { LoginSchema } from "../../Validation/LoginSchema";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    margin: theme.spacing(10, 10, 10, 10),
  },
}));

const LoginForm = ({ message, isLoggedIn, login }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  // Is the user Authenticated??
  //Redirect them to home page

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/reset-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            {message && (
              <Alert icon={false} classname={classes.alert} severity="error">
                {message}
              </Alert>
            )}
          </Grid>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.isLoggedIn,
  message: state.message.message,
});

export default connect(mapStateToProps, { login })(LoginForm);
