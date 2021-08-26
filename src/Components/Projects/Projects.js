import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import AssignmentIcon from "@material-ui/icons/Assignment";
import React from "react";

import { useQuery } from "react-query";
import * as api from "./projectsAPI";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  text: {
    margin: "0px 0px 0px -15px",
  },
}));

const Projects = () => {
  const classes = useStyles();

  const { data } = useQuery("projects", api.getProjects);
  return (
    <div>
      <List>
        {data?.map((project) => (
          <ListItem key={project.id} button>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.small}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.text}
              primary={project.name}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Projects;
