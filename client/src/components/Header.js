import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
// import Login from "./Login";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import Navigation from "./Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ themeType, toggleThemeType }) => {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Project Portfolio
          </Typography>
          {themeType === "light" ? (
            <IconButton aria-label="dark" onClick={toggleThemeType}>
              <themeType />
            </IconButton>
          ) : (
            <IconButton aria-label="light" onClick={toggleThemeType}>
              <Brightness7Icon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Navigation openNav={openNav} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
