import React from "react";

import {
  Paper,
  makeStyles,
  Grid,
  Box,
  Button,
  TextField,
} from "@material-ui/core";

import BasicInfo from "../Components/Profile/BasicInfo";
import ChangePwd from "../Components/Profile/ChangePwd";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: "80px 20px 20px 0",
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    paddingLeft: "20px",
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <BasicInfo />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <ChangePwd />
        </Grid> */}
      </Grid>
    </main>
  );
};

export default ProfilePage;
