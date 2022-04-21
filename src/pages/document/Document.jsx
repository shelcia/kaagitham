import React, { useState, useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import DocumentTopbar from "../../components/templates/DocumentTopbar";
import { io } from "socket.io-client";
import { toolbarOptions } from "../../components/content/Toolbar";
import DocumentSidenav from "../../components/content/DocumentSidenav";
import { useParams } from "react-router-dom";
import { Drawer } from "@mui/material";
// import TextEditor from "../../components/content/Editor";

const Editor = () => {
  // const [value, setValue] = useState("");
  // const [socket, setSocket] = useState();
  // const [quill, setQuill] = useState();
  // const SOCKET_URL = process.env.REACT_APP_SOCKET_LOCAL_LINK;

  // // INITIATING CLIENT SOCKET -> CONNECTING WITH SERVER
  // useEffect(() => {
  //   const s = io(SOCKET_URL);
  //   setSocket(s);
  //   return () => {
  //     s.disconnect();
  //   };
  // }, [SOCKET_URL]);

  // // SENDING CHANGES MADE BY THE CURRENT USER TO THE SERVER
  // useEffect(() => {
  //   if (socket == null || quill == null) return;
  //   const handler = (delta, oldDelta, source) => {
  //     if (source !== "user") return;
  //     const id = localStorage.getItem("KG-id");
  //     socket.emit("send-changes", { delta: delta, id: id });
  //   };
  //   quill.on("text-change", handler);
  //   return () => {
  //     quill.off("text-change", handler);
  //   };
  // }, [quill, socket]);

  // // RECEIVING CHANGES MADE BY OTHER USER FROM THE SERVER

  // useEffect(() => {
  //   if (socket == null || quill == null) return;
  //   const handler = (delta) => {
  //     quill.updateContents(delta);
  //     // socket.emit("send-changes", delta);
  //   };
  //   socket.on("receive-changes", handler);
  //   return () => {
  //     socket.off("receive-changes", handler);
  //   };
  // }, [quill, socket]);

  // //DRAWER TOGGLE VIEW
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleDrawer = (open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setDrawerOpen(!drawerOpen);
  // };

  // const wrapperRef = useCallback((wrapper) => {
  //   // console.log(wrapper);
  //   if (wrapper == null) return;
  //   wrapper.innerHTML = "";
  //   const editor = document.createElement("div");
  //   wrapper.append(editor);
  //   const q = new Quill(editor, {
  //     modules: {
  //       syntax: true,
  //       toolbar: toolbarOptions,
  //       history: {
  //         delay: 2000,
  //         maxStack: 500,
  //         userOnly: true,
  //       },
  //     },
  //     theme: "snow",
  //   });
  //   setQuill(q);
  // }, []);

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

  const { id: documentId } = useParams();
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  // INITIATING CLIENT SOCKET -> CONNECTING WITH SERVER

  useEffect(() => {
    const s = io(process.env.REACT_APP_SOCKET_LOCAL_LINK);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  //SENDING CHANGES MADE BY THE CURRENT USER TO THE SERVER
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

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
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        syntax: true,
        toolbar: toolbarOptions,
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true,
        },
      },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  return (
    <React.Fragment>
      <DocumentTopbar toggle={toggleDrawer(true)} />
      <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
        <DocumentSidenav toggleDrawer={toggleDrawer} />
      </Drawer>
      {/* <TextEditor /> */}
      <div className="editor-container" ref={wrapperRef}></div>
    </React.Fragment>
  );
};

export default Editor;
