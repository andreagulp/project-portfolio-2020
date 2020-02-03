import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { NavLink } from "react-router-dom";

import ProjectList from "../components/ProjectList";

const useStyles = makeStyles(theme => ({
  button: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
}));

function Projects() {
  const classes = useStyles();

  return (
    <div>
      <ProjectList />
      <NavLink to="/projects/create">
        <Fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Fab>
      </NavLink>
    </div>
  );
}

export default Projects;
