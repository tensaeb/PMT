import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { List, makeStyles, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { retrieveProjects } from "../../actions/projects";
import UpdateProjectDialog from "./UpdateProjectDialog";
import ProjectItem from "./ProjectItem";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  text: {
    margin: "0px 0px 0px -15px",
  },
  loading: {
    padding: theme.spacing(2),
  },
}));

const Projects = ({ projects, retrieveProjects }) => {
  const classes = useStyles();
  const [Open, setopen] = useState(false);
  // const [items, setItems] = useState([]);

  // const { projectItems } = projects;

  useEffect(() => {
    retrieveProjects();
  }, []);

  return (
    <div>
      <List>
        {projects ? (
          projects.map((project) => (
            <ProjectItem
              // Open={Open}
              setopen={setopen}
              project={project}
            />
          ))
        ) : (
          <Typography variant="h6" className={classes.loading}>
            Loading ...
          </Typography>
        )}
        <UpdateProjectDialog Open={Open} setopen={setopen} />
      </List>
    </div>
  );
};

// Projects.protoTypes = {
//   projects: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    projects: state.projects.project,
  };
};

export default connect(mapStateToProps, {
  retrieveProjects,
})(Projects);
