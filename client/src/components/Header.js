import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./Login";

import Navigation from "./Navigation";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = ({ classes }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            ERM
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
      <Navigation openNav={openNav} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default withStyles(styles)(Header);
