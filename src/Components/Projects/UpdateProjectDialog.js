import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
import { updateProjects, retrieveProjects } from "../../actions/projects";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sdm: {
    marginTop: theme.spacing(4),
  },
}));

const UpdateProjectDialog = ({
  Open,
  setopen,
  updateProjects,
  retrieveProjects,
  current,
}) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [sdm, setSDM] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const updProj = {
      id: current.id,
      name,
      sdm,
    };

    <Redirect to="/home" />;
    updateProjects(updProj.id, updProj);
  };

  const handleClose = () => {
    setopen(false);
  };

  useEffect(() => {
    retrieveProjects();

    if (current) {
      setName(current.name);
      setSDM(current.sdm);
    }
  }, [current]);

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={Open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Project </DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <Box display="flex" flexDirection="column">
              <TextField
                autoFocus
                // name="name"
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormControl variant="outlined" className={classes.sdm}>
                <InputLabel id="demo-simple-select-label">SDM</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="SDM"
                  onChange={(e) => setSDM(e.target.value)}
                  value={sdm}
                  // name="sdm"
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

UpdateProjectDialog.propTypes = {
  current: PropTypes.object,
  updateProjects: PropTypes.func.isRequired,
  retrieveProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.projects.current,
});

export default connect(mapStateToProps, { updateProjects, retrieveProjects })(
  UpdateProjectDialog
);