import React from "react";
import {
  Grid,
  Typography,
  MuiThemeProvider,
  responsiveFontSizes,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import { ReactComponent as ABoutImage } from "../../../Images/About-us.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(25, 0, 25, 0),
    margin: theme.spacing(30, 0, 0, 0),
    width: "auto",
    height: "auto",
    backgroundColor: "#212531",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  about: {
    // margin: theme.spacing(10, 0, 0, 0),
  },
  aboutTitle: {
    padding: theme.spacing(0, 0, 4, 0),
  },
  aboutBody: {
    color: "white",
    textAlign: "justify",
    padding: theme.spacing(0, 10, 0, 0),
  },
}));

const About = () => {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div id="about" className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
        className={classes.about}
      >
        <Grid item xs={12} sm={6}>
          <ABoutImage className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiThemeProvider theme={theme}>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.aboutTitle}
            >
              About us
            </Typography>
            <Typography variant="h5" className={classes.aboutBody}>
              We are a team of developers dedicated to make the job of
              programmers easier all around the world. We strive to create a
              productive environment that can be of a great help to all
              dedicated software engineers.
            </Typography>
          </MuiThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
