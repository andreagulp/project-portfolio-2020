import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SendIcon from "@material-ui/icons/Send";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

const menuConfig = [
  {
    url: "/",
    icon: <MailIcon />,
    text: "Home"
  },
  {
    url: "/counter",
    icon: <InboxIcon />,
    text: "Counter"
  },
  {
    url: "/namegenerator",
    icon: <SendIcon />,
    text: "Name Generator"
  },
  {
    url: "/shoppinglist",
    icon: <PhotoCamera />,
    text: "Shopping List"
  }
];

const Navigation = ({ openNav, toggleDrawer, classes }) => {
  const sideList = (
    <div className={classes.list}>
      <List>
        {menuConfig.map((item, i) => {
          return (
            // <Link to={item.url} className={classes.link} key={i}>
            <ListItem button key={i}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            // </Link>
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

export default withStyles(styles)(Navigation);
