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

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { loadUser } from "../../actions/loadUser";
import { getTasks, updateTasks, setCurrent } from "../../actions/tasks";
import { retrieveProjects } from "../../actions/projects";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    marginTop: theme.spacing(4),
  },
}));

const UpdateTask = ({
  open,
  setOpen,
  loadUser,
  updateTasks,
  retrieveProjects,
  current,
  users,
  projects,
}) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [project, setProject] = useState("");
  const [dev, setDev] = useState("");
  const [instruction, setInstruction] = useState("");
  const [due, setDueDate] = useState(new Date());

  const handleDateChange = () => {
    // const moment = require("moment");
    // const moments = moment(new Date());
    // const dates = moments.format("M/D/YYYY");
    setDueDate(current.due);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setUrl("");
    setProject("");
    setDev("");
    setInstruction("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const upTask = {
      url,
      project,
      dev,
      instruction,
      due,
      title,
    };
    handleClose();
    updateTasks(current.id, upTask);
  };

  useEffect(() => {
    getTasks();
    retrieveProjects();
    loadUser();
    if (current) {
      setTitle(current.title);
      setUrl(current.url);
      setProject(current.project);
      setDev(current.dev);
      setInstruction(current.instruction);
      setDueDate(current.due);
    }
  }, [current]);

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={open}
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
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                className={classes.padding}
                name="url"
                id="url"
                label="URL"
                variant="outlined"
                value={url}
                // onChange={(e) => onChange(e)}
              />
              <FormControl variant="outlined" className={classes.padding}>
                <InputLabel id="demo-simple-select-label">Project</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="projprojectect"
                  value={project}
                  name="project"
                  onChange={(e) => setProject(e.target.value)}
                >
                  {projects &&
                    projects.map((proj) => (
                      <MenuItem value={proj.id ?? ""}>{proj.name}</MenuItem>
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
                  onChange={(e) => setDev(e.target.value)}
                  value={dev}
                  name="dev"
                >
                  {users &&
                    users.map((user) => (
                      <MenuItem key={user.id} value={user.id ?? ""}>
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
                onChange={(e) => setInstruction(e.target.value)}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={classes.padding}
                  variant="outlined"
                  name="due"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Due Date"
                  value={due}
                  onChange={(e) => {
                    setDueDate(e.target.value);
                    // handleDateChange(e.target.value);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
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

const mapStateToProps = (state) => ({
  projects: state.projects.project,
  users: state.auth.user,
  current: state.tasks.current,
});

export default connect(mapStateToProps, {
  loadUser,
  updateTasks,
  retrieveProjects,
})(UpdateTask);
