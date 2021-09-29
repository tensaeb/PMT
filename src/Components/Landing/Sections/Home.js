import {
  makeStyles,
  Grid,
  Typography,
  MuiThemeProvider,
  responsiveFontSizes,
  createMuiTheme,
  Button,
} from "@material-ui/core";
import React from "react";
import { ReactComponent as TeamImage } from "../../../Images/team.svg";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 100px 10px 100px",
    paddingTop: "90px",
  },
  image: {
    transform: "scale(1.2)",
    paddingTop: "90px",
  },
  button: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const history = useHistory();

  const route = () => {
    let path = `/register`;
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={7}
      >
        <Grid item xs={12} sm={6}>
          <MuiThemeProvider theme={theme}>
            <Typography variant="h2" id="hometext">
              &nbsp; your <br></br> projects easier <br></br> than before
            </Typography>
            <Button
              className={classes.button}
              onClick={route}
              variant="contained"
              color="secondary"
            >
              Get Started
            </Button>
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TeamImage className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
