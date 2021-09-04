import React, { useState } from "react";
import { connect } from "react-redux";

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
  MenuItem,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { createProject, retrieveProjects } from "../../actions/projects";

const useStyles = makeStyles((theme) => ({
  sdm: {
    marginTop: theme.spacing(4),
  },
}));

const AddProjectDialog = ({
  Open,
  setopen,
  createProject,
  // retrieveProjects,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    sdm: "",
  });

  const { name, sdm } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProject(name, sdm);
    // retrieveProjects();

    // console.log(name, sdm);
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={Open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project </DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            {/* <DialogContentText>Add Team</DialogContentText> */}
            <Box display="flex" flexDirection="column">
              <TextField
                autoFocus
                name="name"
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => onChange(e)}
              />

              <FormControl variant="outlined" className={classes.sdm}>
                <InputLabel id="demo-simple-select-label">SDM</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="SDM"
                  onChange={(e) => onChange(e)}
                  value={sdm}
                  name="sdm"
                >
                  <MenuItem value="Agile">Agile</MenuItem>
                  <MenuItem value="Waterfall">Waterfall</MenuItem>
                  <MenuItem value="Incremental">Incremental</MenuItem>
                  <MenuItem value="RAD">RAD</MenuItem>
                  <MenuItem value="Iterative">Iterative</MenuItem>
                  <MenuItem value="Spiral">Spiral</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="secondary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default connect(null, { createProject, retrieveProjects })(
  AddProjectDialog
);
