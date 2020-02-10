import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import TableChartIcon from "@material-ui/icons/TableChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchProjects } from "../actions/project_action";
import ProjectsList from "../components/ProjectsList";
import ProjectsTable from "../components/ProjectsTable";
import { getProjectForTable } from "../selectors/projectTable_selector";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10
  },
  button: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
}));

function Projects() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isCardView, setIsCardView] = useState(true);

  const toggleCardView = () => {
    setIsCardView(true);
  };
  const toggleTableView = () => {
    setIsCardView(false);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects = useSelector(state => state.projects);
  const projectsForTable = useSelector(getProjectForTable);

  console.log("projectsForTable", projectsForTable);

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Tooltip title="Table View">
          <IconButton aria-label="tableview">
            <TableChartIcon onClick={toggleTableView} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Card View">
          <IconButton aria-label="cardview">
            <DashboardIcon onClick={toggleCardView} />
          </IconButton>
        </Tooltip>
      </Grid>
      {isCardView ? (
        <ProjectsList projects={projects} />
      ) : (
        <ProjectsTable projectsForTable={projectsForTable} />
      )}

      <NavLink to="/projects/create">
        <Fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Fab>
      </NavLink>
    </Grid>
  );
}

export default Projects;
