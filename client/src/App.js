import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";

import Header from "./components/Header";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Employees from "./pages/Employees";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectEdit from "./pages/ProjectEdit";

const App = () => {
  const [themeType, setThemeType] = useState("light");

  const theme = createMuiTheme({
    palette: {
      primary: teal,
      type: themeType
    }
  });

  const toggleThemeType = () => {
    const newType = () => {
      if (themeType === "dark") {
        return "light";
      }
      if (themeType === "light") {
        return "dark";
      }
    };

    setThemeType(newType);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />

        <Header toggleThemeType={toggleThemeType} />
        <main>
          <Container>
            <Grid container spacing={3}>
              <Switch>
                <Route path="/projects/create" component={ProjectCreate} />
                <Route
                  exact
                  path="/projects/:projectid"
                  component={ProjectEdit}
                />
                <Route path="/projects" component={Projects} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/employees" component={Employees} />
                <Route path="/teams" component={Teams} />
                <Route path="/" component={Home} />
              </Switch>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
