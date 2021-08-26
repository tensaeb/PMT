import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const TaskList = () => {
  return (
    <div>
      <List>
        <ListItem button p={3}>
          <ListItemText primary="E-mail after registration so that I can confirm my address" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="E-mail after registration so that I can confirm my address" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="E-mail after registration so that I can confirm my address" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="E-mail after registration so that I can confirm my address" />
        </ListItem>
      </List>
    </div>
  );
};

export default TaskList;
