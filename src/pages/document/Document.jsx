import React, { useState } from "react";
import DocumentSidenav from "../../components/content/DocumentSidenav";
import DocumentTopbar from "../../components/templates/DocumentTopbar";
import { Drawer } from "@mui/material";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Document = () => {
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

  const BUTTONLIST = [
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    // "/",
    ["fontColor", "hiliteColor"],
    ["outdent", "indent"],
    ["align", "horizontalRule", "list", "table"],
    ["link", "image", "video"],
    ["fullScreen", "showBlocks" /*, 'codeView'*/],
    ["preview", "print"],
    // ["save", "template"],
  ];

  const [document, setDocument] = useState({ data: "" });

  const handleChange = (content) => {
    // console.log(content); //Get Content Inside Editor
    setDocument({ ...document, data: content });
  };

  return (
    <React.Fragment>
      <DocumentTopbar toggle={toggleDrawer(true)} />
      <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
        <DocumentSidenav toggleDrawer={toggleDrawer} />
      </Drawer>
      <SunEditor
        onChange={handleChange}
        setOptions={{
          height: "80vh",
          buttonList: BUTTONLIST,
        }}
      />
    </React.Fragment>
  );
};

export default Document;
