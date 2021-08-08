import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Divider,
  IconButton,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import AvatarGroup from "@material-ui/lab/AvatarGroup";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImageIcon from "@material-ui/icons/Image";
import StyledBadge from "./StyledBadge";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "15px 0px 0px 10px",
  },
  menu: {
    margin: "25px 0px 0px 1px",
  },
  menuButtons: {
    justifyContent: "flex-start",
    padding: "0px 0px 10px 15px",
  },
  button: {
    textTransform: "capitalize",
    margin: "-5px 0px 0px 10px",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  exsmall: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  projects: {
    padding: "25px 0px 0px 3px",
  },
  darkmode: {
    margin: theme.spacing(4),
  },
}));

const SidebarItems = () => {
  const classes = useStyles();
  return (
    <div>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary="Secondary text" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="more">
              <MoreHorizIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Divider />

      {/* completed task and open task */}

      <Box display="flex" flexDirection="row" className={classes.box}>
        <Box flexDirection="column" m={1}>
          <Typography variant="h6">378</Typography>
          <Typography variant="caption">Completed Tasks</Typography>
        </Box>
        <Box flexDirection="column" m={1}>
          <Typography variant="h6">22</Typography>
          <Typography variant="caption">Open Tasks</Typography>
        </Box>
      </Box>

      {/* Menus */}

      <Box display="flex" flexDirection="column" className={classes.menu}>
        <Typography className={classes.menuButtons} variant="caption">
          MENUS
        </Typography>
        <Button className={classes.menuButtons} fullWidth>
          Home
        </Button>
        <Button className={classes.menuButtons} fullWidth>
          My Task
        </Button>
        <StyledBadge color="primary" badgeContent={6}>
          <Button fullWidth className={classes.menuButtons}>
            Notification
          </Button>
        </StyledBadge>
      </Box>

      {/* Projects */}

      <Box className={classes.projects}>
        <Typography className={classes.menuButtons} variant="caption">
          PROJECTS
        </Typography>
        <List dense>
          {/* Project 1 */}

          <ListItem button>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.small}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Dashboard UI Kit"></ListItemText>
          </ListItem>

          {/* Project 2 */}

          <ListItem button>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.small}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="CRM System"></ListItemText>
          </ListItem>

          {/* Project 3 */}

          <ListItem button>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.small}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Website Redesign"></ListItemText>
          </ListItem>

          {/* Project 4 */}

          <ListItem button>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.small}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Communication Tool"></ListItemText>
          </ListItem>
        </List>
        <Button
          color="secondary"
          className={classes.button}
          style={{ backgroundColor: "transparent" }}
          disableRipple
        >
          <IconButton aria-label="add" size="small">
            <AddIcon color="secondary" fontSize="inherit" />
          </IconButton>
          Add Project
        </Button>
      </Box>

      {/* Teams */}

      <Box className={classes.projects}>
        <Typography className={classes.menuButtons} variant="caption">
          TEAMS
        </Typography>
        <List>
          {/* Team 1 */}

          <ListItem button>
            <ListItemText primary="Designers"></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" disabled>
                <AvatarGroup max={3}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          {/* Team 2 */}

          <ListItem button>
            <ListItemText primary="Backend"></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" disabled>
                <AvatarGroup max={3}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  /> */}
                </AvatarGroup>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          {/* Team 3 */}

          <ListItem button>
            <ListItemText primary="Frontend"></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" disabled>
                <AvatarGroup max={3}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  {/* <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  /> */}
                </AvatarGroup>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <Button
          color="secondary"
          className={classes.button}
          style={{ backgroundColor: "transparent" }}
          disableRipple
        >
          <IconButton aria-label="add" size="small">
            <AddIcon color="secondary" fontSize="inherit" />
          </IconButton>
          Add Team
        </Button>
      </Box>
      <FormControl component="fieldset" className={classes.darkmode}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Dark Mode"
          labelPlacement="start"
        />
      </FormControl>
    </div>
  );
};

export default SidebarItems;
