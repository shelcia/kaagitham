import React, { useState, useCallback } from "react";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DocumentTopbar from "../../components/templates/DocumentTopbar";

const Editor = () => {
  // const [value, setValue] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"], // remove formatting button
  ];
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //seee
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const wrapperRef = useCallback(
    (wrapper) => {
      // console.log(wrapper);
      if (wrapper == null) return;
      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      new Quill(editor, {
        modules: {
          syntax: true,
          toolbar: toolbarOptions,
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true,
          },
        },
        theme: "snow",
      });
    },
    [toolbarOptions]
  );

  return (
    <React.Fragment>
      <DocumentTopbar toggle={toggleDrawer("left", true)} />
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <div className="editor-container" ref={wrapperRef}></div>
    </React.Fragment>
  );
};

export default Editor;
