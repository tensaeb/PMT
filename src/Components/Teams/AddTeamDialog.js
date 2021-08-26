import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Box,
  Chip,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import * as api from "./teamsAPI";
import { useQuery } from "react-query";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: "20px 0px 20px 0px",
  },
}));

const AddTeamDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data } = useQuery("teams", api.getTeams);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Team </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Add Team</DialogContentText> */}
          <Box display="flex" flexDirection="column">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              className={classes.box}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              // defaultValue="Default Value"
              variant="outlined"
            />
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-label">Users</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Users"
                // value={age}
                // onChange={handleChange}
              >                
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTeamDialog;
