import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Employees from "./pages/Employees";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
  // content: {
  //   flexGrow: 1,
  //   height: "100vh",
  //   overflow: "auto"
  // }
});

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Header />
      <main className={classes.content}>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
              <Route path="/myprofile" component={MyProfile} />
              <Route path="/employees" component={Employees} />
              <Route path="/teams" component={Teams} />
              <Route path="/projects" component={Projects} />
              <Route path="/" component={Home} />
            </Switch>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default withStyles(styles)(App);
