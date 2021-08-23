import React, { useState, useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Drawer } from "@material-ui/core";
import DocumentTopbar from "../../components/templates/DocumentTopbar";
import { io } from "socket.io-client";
import { toolbarOptions } from "../../components/content/Toolbar";
import DocumentSidenav from "../../components/content/DocumentSidenav";

const Editor = () => {
  // const [value, setValue] = useState("");
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const SOCKET_URL = process.env.REACT_APP_REST_LOCAL_LINK;

  //INITIATING CLIENT SOCKET -> CONNECTING WITH SERVER
  useEffect(() => {
    const s = io(SOCKET_URL);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, [SOCKET_URL]);

  //SENDING CHANGES MADE BY THE CURRENT USER TO THE SERVER
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      const id = localStorage.getItem("KG-id");
      socket.emit("send-changes", { delta: delta, id: id });
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

  //DRAWER TOGGLE VIEW
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

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
      <DocumentTopbar toggle={toggleDrawer(true)} />
      <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
        <DocumentSidenav toggleDrawer={toggleDrawer} />
      </Drawer>
      <div className="editor-container" ref={wrapperRef}></div>
    </React.Fragment>
  );
};

export default Editor;
