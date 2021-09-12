import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/loadUser";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sdm: {
    marginTop: theme.spacing(4),
  },
}));

const SelectUser = ({ users, loadUser, onChange, manager }) => {
  const classes = useStyles();
  //   const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <FormControl variant="outlined" className={classes.sdm}>
      <InputLabel id="demo-simple-select-label">Managers</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="manager"
        onChange={(e) => onChange(e)}
        value={manager}
        name="manager"
      >
        {users &&
          users.map((user) => {
            <MenuItem key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </MenuItem>;
            {
              console.log(` ${user.first_name} ${user.last_name}`);
            }
          })}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.auth.user,
  };
};

export default connect(mapStateToProps, { loadUser })(SelectUser);
