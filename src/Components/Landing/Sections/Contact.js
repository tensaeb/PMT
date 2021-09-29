import React from "react";

import {
  Grid,
  Typography,
  MuiThemeProvider,
  responsiveFontSizes,
  createMuiTheme,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

import { ReactComponent as ContactImage } from "../../../Images/contact-us.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "1000px",
    backgroundColor: "#E5E5E5",
    maxHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  contact: {
    padding: theme.spacing(10, 10, 0, 20),
  },
  contactCaption: {
    width: "55%",
  },
}));
const Contact = () => {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div id="contact" className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
        className={classes.contact}
      >
        <Grid item xs={12} sm={6}>
          <MuiThemeProvider theme={theme}>
            <Typography variant="h2" align="left" id="getintouch">
              Get In Touch
            </Typography>
            <Typography variant="body1" className={classes.contactCaption}>
              Hey! We are looking forward to start a project with you
            </Typography>

            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+251 912131445" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+251 912131445" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+251 912131445" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+251 912131445" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="programmer@gmail.com" />
              </ListItem>
            </List>
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactImage fill="blue" stroke="blue" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
