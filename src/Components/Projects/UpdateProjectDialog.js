import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useFormik } from "formik";

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
import { ProjectSchema } from "../../Validation/ProjectSchema";
import { Redirect } from "react-router";

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
  users,
}) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      sdm: "",
      manager: "",
    },
    validationSchema: ProjectSchema,
    onSubmit: (values) => {
      updateProjects(current.id, values);
      handleClose();
    },
  });

  const handleClose = () => {
    setopen(false);
  };

  useEffect(() => {
    // retrieveProjects();
    if (current) {
      formik.setFieldValue("name", current.name);
      formik.setFieldValue("sdm", current.sdm);
      formik.setFieldValue("manager", current.manager);
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
        <form onSubmit={(e) => formik.handleSubmit(e)}>
          <DialogContent>
            <Box display="flex" flexDirection="column">
              <TextField
                autoFocus
                name="name"
                id="name"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
              />

              <FormControl variant="outlined" className={classes.sdm}>
                <InputLabel id="demo-simple-select-label">SDM</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="SDM"
                  onChange={formik.handleChange}
                  value={formik.values.sdm}
                  name="sdm"
                >
                  <MenuItem value="AGL">Agile</MenuItem>
                  <MenuItem value="WRF">Waterfall</MenuItem>
                  <MenuItem value="INC">Incremental</MenuItem>
                  <MenuItem value="RAD">RAD</MenuItem>
                  <MenuItem value="ITR">Iterative</MenuItem>
                  <MenuItem value="SPR">Spiral</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={classes.sdm}>
                <InputLabel id="demo-simple-select-label">Managers</InputLabel>
                <Select
                  labelId="managers-label"
                  id="managers"
                  label="manager"
                  onChange={formik.handleChange}
                  value={formik.values.manager}
                  name="manager"
                >
                  {users &&
                    users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.first_name} {user.last_name}
                      </MenuItem>
                    ))}
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
  users: state.auth.user,
  current: state.projects.current,
});

export default connect(mapStateToProps, { updateProjects, retrieveProjects })(
  UpdateProjectDialog
);
