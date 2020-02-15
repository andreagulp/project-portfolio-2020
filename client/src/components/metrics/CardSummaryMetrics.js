import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: "30px"
  }
}));

const CardSummary = props => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.card}>
      {props.children}
    </Paper>
  );
};

function CardSummaryMetrics({ totalDeployed, totalInProgress, totalBacklog }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardSummary>
            <Typography variant="button" display="block" gutterBottom>
              DEPLOYED
            </Typography>
            {totalDeployed}
          </CardSummary>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardSummary>
            <Typography variant="button" display="block" gutterBottom>
              IN PROGRESS
            </Typography>
            {totalInProgress}
          </CardSummary>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardSummary>
            <Typography variant="button" display="block" gutterBottom>
              BACKLOG
            </Typography>
            {totalBacklog}
          </CardSummary>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardSummaryMetrics;
