import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";

const DocumentSidenav = ({ toggleDrawer }) => {
  // DRAWER WIDTH

  const DRAWER_WIDTH = 250;

  const sidebarOptions = [
    {
      label: "Information",
    },
    {
      label: "Comments",
    },
    {
      label: "Edit History",
    },
    {
      label: "Share",
    },
    {
      label: "Permissions",
    },
    {
      label: "Download",
    },
  ];

  return (
    <div
      style={{ width: DRAWER_WIDTH }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h3>MENU</h3>
      <List>
        {sidebarOptions.map((options, index) => (
          <ListItem button key={index}>
            <ListItemText primary={options.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DocumentSidenav;
