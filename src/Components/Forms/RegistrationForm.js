import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import Alert from "@material-ui/lab/Alert";

import { withRouter } from "react-router-dom";

import { Link, Redirect } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { RegistrationSchema } from "../../Validation/RegistrationSchema";

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
    margin: theme.spacing(7, 0, 0, 0),
  },
}));

const RegistrationForm = ({ register, message }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      // console.log(
      //   values.first_name,
      //   values.last_name,
      //   values.email,
      //   values.password
      // );
      register(
        values.first_name,
        values.last_name,
        values.email,
        values.password
      );
    },
  });

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="re_password"
                label="Confirm Password"
                type="password"
                id="re_password"
                value={formik.values.re_password}
                onChange={formik.handleChange}
                error={
                  formik.touched.re_password &&
                  Boolean(formik.errors.re_password)
                }
                helperText={
                  formik.touched.re_password && formik.errors.re_password
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          {message && (
            <Alert icon={false} classname={classes.alert} severity="error">
              {message}
            </Alert>
          )}
        </form>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  message: state.message.message,
});

export default connect(mapStateToProps, { register })(
  withRouter(RegistrationForm)
);
