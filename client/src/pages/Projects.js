import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ProjectList from "../components/ProjectList";
import { fetchProjects } from "../actions/project_action";

const useStyles = makeStyles(theme => ({
  button: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
}));

function Projects() {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProjects);
  // }, [dispatch]);

  // const projects = useSelector(state => state.projects);

  // console.log("projects", projects);

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
