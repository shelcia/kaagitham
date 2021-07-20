import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { List, Divider, ListItem, ListItemText } from "@material-ui/core";

const DocumentSidenav = ({ toggleDrawer }) => {
  //DRAWER STYLES
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });
  const classes = useStyles();

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
      className={clsx(classes.list)}
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
