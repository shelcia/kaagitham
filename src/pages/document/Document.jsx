import React, { useState, useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
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
import { io } from "socket.io-client";
import { toolbarOptions } from "../../components/content/Toolbar";

const Editor = () => {
  // const [value, setValue] = useState("");
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const SERVER_URL = process.env.REACT_APP_HEROKU_LINK;

  //INITIATING CLIENT SOCKET -> CONNECTING WITH SERVER
  useEffect(() => {
    const s = io(SERVER_URL);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, [SERVER_URL]);

  //SENDING CHANGES MADE BY THE CURRENT USER TO THE SERVER
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);
    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, socket]);

  //RECEIVING CHANGES MADE BY OTHER USER FROM THE SERVER

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta) => {
      quill.updateContents(delta);
      // socket.emit("send-changes", delta);
    };
    socket.on("receive-changes", handler);
    return () => {
      socket.off("receive-changes", handler);
    };
  }, [quill, socket]);

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

  //DRAWER TOGGLE VIEW
  const [state, setState] = useState({
    left: false,
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
  const wrapperRef = useCallback((wrapper) => {
    // console.log(wrapper);
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
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
    setQuill(q);
  }, []);

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
