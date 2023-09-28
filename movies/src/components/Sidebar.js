import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import { useAppContext } from "../Context/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { isSidebarOpen, changeSidebar } = useAppContext();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    changeSidebar();
  };
  const handleLinkClick = (link) => {
    navigate(link);
  };

  const list = (
    <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {[
          { text: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
          { text: "Friends", icon: <GroupIcon />, link: "/friends" },
          // { text: "Messages", icon: <ForumIcon />, link: "/message" },
          { text: "Home", icon: <HomeIcon />, link: "/" },
        ].map((item, index) => (
          <ListItemButton
            key={item.text}
            disablePadding
            onClick={() => handleLinkClick(item.link)}
          >
            <Link to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </Link>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </div>
  );
}
