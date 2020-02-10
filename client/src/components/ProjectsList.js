import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: 10
  }
}));

function ProjectsList({ projects }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {projects.map(project => {
        return <ProjectCard key={project._id} project={project} />;
      })}
    </Grid>
  );
}

export default ProjectsList;
