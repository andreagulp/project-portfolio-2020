import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import GroupWorkTwoToneIcon from "@material-ui/icons/GroupWorkTwoTone";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const menuConfig = [
  {
    url: "/",
    icon: <HomeTwoToneIcon />,
    text: "Home"
  },
  {
    url: "/projects",
    icon: <AccountTreeIcon />,
    text: "Projects"
  },
  {
    url: "/myprofile",
    icon: <AccountCircleTwoToneIcon />,
    text: "My Profile"
  },
  {
    url: "/employees",
    icon: <GroupTwoToneIcon />,
    text: "Employees"
  },
  {
    url: "/teams",
    icon: <GroupWorkTwoToneIcon />,
    text: "Teams"
  }
];

const Navigation = ({ openNav, toggleDrawer }) => {
  const classes = useStyles();
  const sideList = (
    <div className={classes.list}>
      <List>
        {menuConfig.map((item, i) => {
          return (
            <Link to={item.url} className={classes.link} key={i}>
              <ListItem button key={i}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <Drawer open={openNav} onClose={toggleDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        {sideList}
      </div>
    </Drawer>
  );
};

export default Navigation;
