import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import { fetchUser } from "../actions/user_action";

const styles = {
  avatar: {
    margin: 2
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
};

const Login = ({ classes, fetchUser, activeUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {!activeUser ? (
        <Button color="inherit">
          <a className={classes.link} href="/auth/google">
            Login
          </a>
        </Button>
      ) : (
        <>
          <IconButton
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Avatar
              alt={activeUser.name}
              src={activeUser.photo}
              className={classes.avatar}
            />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a className={classes.link} href="/api/logout">
                Logout
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a className={classes.link} href="/api/current_user">
                My Account
              </a>
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeUser: state.user };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser }, dispatch);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login);
