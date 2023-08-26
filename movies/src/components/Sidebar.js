import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppContext } from "../Context/appContext";

export default function Sidebar() {
  const { isSidebarOpen, changeSidebar } = useAppContext();

  const toggleDrawer = () => {
    changeSidebar();
  };

  const list = (
    <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItemButton key={text} disablePadding>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
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
