import React from "react";
import { useQuery } from "react-query";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Menu,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import * as api from "./teamsAPI";

const Teams = () => {
  const { data } = useQuery("teams", api.getTeams);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List>
        {data?.map((team) => (
          <ListItem key={team.id}>
            <ListItemText primary={team.name}></ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <List>
                  <ListItem button>
                    <ListItemText primary="Edit" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Delete" />
                  </ListItem>
                </List>
              </Menu>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Teams;
