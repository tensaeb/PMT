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
import { createTasks } from "../../actions/tasks";
import { retrieveProjects } from "../../actions/projects";
import { getTasks } from "../../actions/tasks";
import { TaskSchema } from "../../Validation/TaskSchema";
import { useFormik } from "formik";

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
  createTasks,
  getTasks,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    url: "",
    project: "",
    dev: "",
    instruction: "",
    title: "",
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
      project: "",
      dev: "",
      instruction: "",
      due: "",
    },
    validationSchema: TaskSchema,
    onSubmit: (values, { resetForm }) => {
      // createProject(values);
      // handleClose();
      // resetForm();
    },
  });

  const [due, setDueDate] = useState(new Date());

  const { url, project, dev, instruction, title } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = () => {
    const moment = require("moment");
    const moments = moment(new Date());
    const dates = moments.format("M/D/YYYY");
    setDueDate(dates);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const crTask = {
      title,
      url,
      project,
      dev,
      instruction,
      due,
    };
    handleClose();

    createTasks(crTask);
  };

  const handleClose = () => {
    setopen(false);
    setFormData("");
    getTasks();
  };

  useEffect(() => {
    loadUser();
    retrieveProjects();
  }, []);

  return (
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
                  label="projprojectect"
                  onChange={(e) => onChange(e)}
                  value={project}
                  name="project"
                >
                  {projects &&
                    projects.map((proj) => (
                      <MenuItem value={proj.id ?? ""} id="projects">{proj.name}</MenuItem>
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
                      <MenuItem key={user.id} value={user.id ?? ""} id="developer">
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

              {/* <FormControl variant="outlined" className={classes.padding}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="user"
                    onChange={(e) => onChange(e)}
                    value={status}
                    name="status"
                  >
                    <MenuItem value="CMP">Completed</MenuItem>
                    <MenuItem value="SUB">Submitted</MenuItem>
                    <MenuItem value="PEN">Pending</MenuItem>
                    <MenuItem value="DOI">Doing</MenuItem>
                    <MenuItem value="REJ">Regected</MenuItem>
                  </Select>
                </FormControl> */}
              {/* <Grid container justifyContent="space-around"> */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  className={classes.padding}
                  variant="outlined"
                  name="due"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={due}
                  onChange={handleDateChange}
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
  getTasks,
})(AddTasks);
