import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);
