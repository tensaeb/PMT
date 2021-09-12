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
import { createTasks, setCurrent } from "../../actions/tasks";
import { retrieveProjects } from "../../actions/projects";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    marginTop: theme.spacing(4),
  },
}));

const AddTasks = ({
  users,
  loadUser,
  Open,
  setopen,
  retrieveProjects,
  projects,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    url: "",
    project: "",
    dev: "",
    instruction: "",
    status: "",
    due: "",
    title: "",
  });

  const { url, projs, dev, instruction, status, due, title } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const crProj = {
      url,
      projs,
      dev,
      instruction,
      status,
      due,
      title,
    };

    createTasks(crProj);
  };

  const handleClose = () => {
    setopen(false);
  };

  useEffect(() => {
    loadUser();
    retrieveProjects();
  }, []);

  return (
    <div>
      <div>
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={Open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Task </DialogTitle>
          <form onSubmit={(e) => onSubmit(e)}>
            <DialogContent>
              {/* <DialogContentText>Add Team</DialogContentText> */}
              <Box display="flex" flexDirection="column">
                <TextField
                  autoFocus
                  name="title"
                  id="title"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => onChange(e)}
                />
                <TextField
                  className={classes.padding}
                  autoFocus
                  name="url"
                  id="url"
                  label="URL"
                  variant="outlined"
                  value={url}
                  onChange={(e) => onChange(e)}
                />
                <FormControl variant="outlined" className={classes.padding}>
                  <InputLabel id="demo-simple-select-label">Project</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="project"
                    onChange={(e) => onChange(e)}
                    value={projs}
                    name="projs"
                  >
                    {projects &&
                      projects.map((project) => (
                        <MenuItem value={project.id}>{project.name}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.padding}>
                  <InputLabel id="demo-simple-select-label">
                    Developers
                  </InputLabel>
                  <Select
                    labelId="managers-label"
                    id="managers"
                    label="manager"
                    onChange={(e) => onChange(e)}
                    value={dev}
                    name="dev"
                  >
                    {users &&
                      users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                          {user.first_name} {user.last_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <TextField
                  className={classes.padding}
                  id="standard-multiline-static"
                  label="Instructions"
                  variant="outlined"
                  name="instruction"
                  multiline
                  rows={4}
                  value={instruction}
                  onChange={(e) => onChange(e)}
                />

                <FormControl variant="outlined" className={classes.padding}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="user"
                    onChange={(e) => onChange(e)}
                    value={status}
                    name="status"
                  >
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Submitted">Submitted</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Regected">Regected</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="date"
                  label="Due Date"
                  type="date"
                  variant="outlined"
                  className={classes.padding}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.auth.user,
    projects: state.projects.project,
  };
};

export default connect(mapStateToProps, {
  createTasks,
  loadUser,
  retrieveProjects,
})(AddTasks);
