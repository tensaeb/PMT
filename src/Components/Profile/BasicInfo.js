import React from "react";

import {
  Paper,
  makeStyles,
  Grid,
  Box,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";

import { ProfileSchema } from "../../Validation/ProfileSchema";
import { useFormik } from "formik";
import { connect } from "react-redux";

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
    width: "15%",
  },
  avatar: {
    width: theme.spacing(21),
    height: theme.spacing(21),
    margin: theme.spacing(0, 0, 3, 0),
  },
  button: {
    width: "15%",
    margin: theme.spacing(0, 0, 6, 0),
  },
}));

const BasicInfo = ({ user }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      img: null,
    },
    validationSchema: ProfileSchema,
    onSubmit: (values) => {},
  });

  return (
    <Paper className={classes.paper}>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <h1>Basic Information</h1>
        <AccountCircleRoundedIcon className={classes.avatar} />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        className={classes.form}
      >
        <form autoComplete="off">
          <TextField
            id="standard-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.basicForm}
          />
          <Typography variant="h4">{user.email}</Typography>
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-basic"
            label="Occupation"
            variant="outlined"
            fullWidth
            //   className={classes.basicForm}
          />
        </form>
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
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.Authentication,
  };
};

export default connect(mapStateToProps)(BasicInfo);
