import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  description: {
    width: 200
  },
  button: {
    // textDecoration: "none"
  }
}));

function ProjectCard({ project }) {
  const classes = useStyles();
  const { title, description, brand, team, _id } = project;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
      <Card className={classes.root}>
        <CardContent className={classes.card}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            noWrap
          >
            {team}
          </Typography>
          <Typography variant="h5" component="h2" noWrap>
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {brand}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
            noWrap={true}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            <NavLink to={`/projects/${_id}`}>Open Project</NavLink>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
