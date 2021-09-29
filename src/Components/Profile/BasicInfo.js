import React, { useEffect } from "react";

import {
  Paper,
  makeStyles,
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Input,
} from "@material-ui/core";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";

import { ProfileSchema } from "../../Validation/ProfileSchema";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { uploadimage } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 0, 6, 0),
  },
  form: {
    padding: "auto",
    width: "60%",
    margin: "auto",
  },
  basicForm: {
    margin: theme.spacing(0, 0, 3, 0),
  },
  update: {
    margin: theme.spacing(6, 0, 0, 0),
    // width: "15%",
  },
  avatar: {
    width: theme.spacing(21),
    height: theme.spacing(21),
    margin: theme.spacing(0, 0, 3, 0),
  },
  button: {
    // width: "15%",
    margin: theme.spacing(0, 0, 6, 0),
  },
  input: {
    display: "none",
  },
}));

const BasicInfo = ({ currentUser }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      img: null,
    },
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      // uploadimage(currentUser.id, values.img);
      // console.log(values.img);
    },
  });

  useEffect(() => {
    if (currentUser) {
      formik.setFieldValue("first_name", currentUser.first_name);
      formik.setFieldValue("last_name", currentUser.last_name);
      formik.setFieldValue("email", currentUser.email);
      formik.setFieldValue("img", currentUser.img);
    }
  }, [currentUser]);

  return (
    <Paper className={classes.paper}>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <h1>Basic Information</h1>
        <form onSubmit={formik.handleSubmit}>
          <Avatar src={formik.values.img} className={classes.avatar} />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            name="img"
            onChange={(event) => {
              formik.setFieldValue("img", event.target.files[0]);
            }}
          />
          <label htmlFor="contained-button-file">
            <Button
              type="submit"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              color="primary"
              component="span"
            >
              Upload
            </Button>
          </label>
        </form>
      </Box>

      <form autoComplete="off">
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          className={classes.form}
        >
          <TextField
            name="first_name"
            id="standard-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.basicForm}
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="outlined"
            name="last_name"
            fullWidth
            className={classes.basicForm}
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            className={classes.basicForm}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.update}
            startIcon={<SaveIcon />}
          >
            Update
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.Authentication.currentUser,
  };
};

export default connect(mapStateToProps)(BasicInfo);
