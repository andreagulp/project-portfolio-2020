import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchUser } from "../actions/user_action";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 2
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

const Login = ({ fetchUser }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, fetchUser]);

  return (
    <div>
      {!user ? (
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
              alt={user.name}
              src={user.photo}
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

// const mapStateToProps = state => {
//   return { user: state.user };
// };
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
