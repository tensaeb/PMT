import React, { useState, useEffect } from "react";
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
import { loadUser } from "../../actions/loadUser";

import { makeStyles } from "@material-ui/core/styles";
import { createProject } from "../../actions/projects";
import { useFormik } from "formik";
import { ProjectSchema } from "../../Validation/ProjectSchema";

const useStyles = makeStyles((theme) => ({
  sdm: {
    marginTop: theme.spacing(4),
  },
}));

const AddProjectDialog = ({
  users,
  loadUser,
  Open,
  setopen,
  createProject,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setopen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      sdm: "",
      manager: "",
    },
    validationSchema: ProjectSchema,
    onSubmit: (values, { resetForm }) => {
      createProject(values);
      handleClose();
      resetForm();
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

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
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            {/* <DialogContentText>Add Team</DialogContentText> */}
            <Box display="flex" flexDirection="column">
              <TextField
                autoFocus
                name="name"
                id="name"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
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
                  error={formik.touched.sdm && Boolean(formik.errors.sdm)}
                  helperText={formik.touched.sdm && formik.errors.sdm}
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
                  error={
                    formik.touched.manager && Boolean(formik.errors.manager)
                  }
                  helperText={formik.touched.manager && formik.errors.manager}
                >
                  {users &&
                    users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.first_name} {user.last_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              {/* <SelectUser manager={manager} onChange={onchange} /> */}
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

const mapStateToProps = (state) => {
  return {
    users: state.auth.user,
    projects: state.projects.project,
  };
};

export default connect(mapStateToProps, { loadUser, createProject })(
  AddProjectDialog
);
