import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchProjects } from "../actions/project_action";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10
  }
}));

function ProjectList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects = useSelector(state => state.projects);

  return (
    <Grid container spacing={3} className={classes.root}>
      {projects.map(project => {
        return <ProjectCard key={project._id} project={project} />;
      })}
    </Grid>
  );
}

export default ProjectList;
