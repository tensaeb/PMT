import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import * as api from "./projectsAPI";
import { useQuery } from "react-query";

const useStyles = makeStyles((theme) => ({}));

const AddProjectDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const { data } = useQuery("teams", api.getProjects);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        // open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project </DialogTitle>
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
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-label">Manager</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Manager"
                // value={age}
                // onChange={handleChange}
              ></Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-label">Team</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Team"
                // value={age}
                // onChange={handleChange}
              ></Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-label">SDM</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="SDM"
                // value={age}
                // onChange={handleChange}
              ></Select>
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

export default AddProjectDialog;
