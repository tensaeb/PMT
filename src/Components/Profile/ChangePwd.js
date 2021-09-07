import React from "react";

import {
  Paper,
  makeStyles,
  Grid,
  Box,
  Button,
  TextField,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 0, 2, 0),
  },
  form: {
    padding: theme.spacing(0, 0, 3, 3),
    width: "65%",
    margin: theme.spacing(0, 0, 0, 5),
  },
  basicForm: {
    margin: theme.spacing(0, 0, 2, 0),
  },
}));

const ChangePwd = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <h1>Change Password</h1>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            id="standard-password-input"
            label="Old Password"
            type="password"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-password-input"
            label="New Password"
            type="password"
            fullWidth
            className={classes.basicForm}
          />
          <TextField
            id="standard-repassword-input"
            label="Confirm Password"
            type="password"
            fullWidth
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

export default ChangePwd;
