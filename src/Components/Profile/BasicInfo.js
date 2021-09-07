import React from "react";

import {
  Paper,
  makeStyles,
  Grid,
  Box,
  Button,
  TextField,
} from "@material-ui/core";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 0, 6, 0),
  },
  form: {
    padding: "auto",
    width: "65%",
    margin: "auto",
  },
  basicForm: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  update: {
    margin: theme.spacing(4, 0, 0, 0),
    width: "22%",
  },
  avatar: {
    width: theme.spacing(21),
    height: theme.spacing(21),
    margin: theme.spacing(0, 0, 3, 0),
  },
  button: {
    width: "22%",
    margin: theme.spacing(0, 0, 3, 0),
  },
}));

const BasicInfo = () => {
  const classes = useStyles();
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
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="First Name"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-basic"
            label="Occupation"
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

export default BasicInfo;
