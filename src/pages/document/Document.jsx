import React, { useState, useEffect } from "react";
import DocumentSidenav from "../../components/content/DocumentSidenav";
import DocumentTopbar from "../../components/templates/DocumentTopbar";
import { Drawer, Fab } from "@mui/material";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { MdArrowBackIos, MdSave } from "react-icons/md";
import { apiDocument } from "../../services/api/models/DocumentModel";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { FullLoader } from "../../common/Loader";

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
    // ["fullScreen", "showBlocks" /*, 'codeView'*/],
    // ["preview", "print"],
    ["print"],
    // ["save", "template"],
  ];

  const [loading, setLoading] = useState(true);

  const [document, setDocument] = useState({
    title: "",
    data: "",
    owner: [],
    shared: [],
    comments: [],
    editHistory: [],
  });

  const handleChange = (content) => {
    setDocument({ ...document, data: content });
  };

  const { id } = useParams();

  useEffect(() => {
    const ac = new AbortController();
    apiDocument.getSingle(id, ac.signal).then((res) => {
      if (res.status === "200") {
        // console.log(res);
        setDocument(res.message);
        setLoading(false);
      }
    });
    return () => ac.abort();
  }, [id]);

  const saveDocument = () => {
    // console.log("saving ", document);

    toast("Saving in Progress!", {
      icon: "⌛",
      duration: 1000,
    });

    const body = {
      title: document.title,
      data: document.data,
    };
    apiDocument.put(body, id).then((res) => {
      console.log(res);
      if (res.status === "200") {
        toast.success("Document Saved Successfully");
      } else {
        toast.error("Document Saving Failed");
      }
    });
  };

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <DocumentTopbar toggle={toggleDrawer(true)} />
      <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
        <DocumentSidenav toggleDrawer={toggleDrawer} />
      </Drawer>
      {loading ? (
        <FullLoader />
      ) : (
        <SunEditor
          onChange={handleChange}
          setOptions={{
            buttonList: BUTTONLIST,
          }}
          defaultValue={document.data}
        />
      )}

      <div style={backstyle}>
        <Fab
          variant="extended"
          size="medium"
          color="default"
          aria-label="goBack"
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIos style={{ marginRight: 1 }} />
          Go Back
        </Fab>
      </div>

      <div style={style}>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="save"
          onClick={saveDocument}
        >
          <MdSave style={{ marginRight: 1 }} />
          Save
        </Fab>
      </div>
    </React.Fragment>
  );
};

export default Document;

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  zIndex: 100,
};

const backstyle = {
  margin: 0,
  top: "auto",
  left: 20,
  bottom: 20,
  right: "auto",
  position: "fixed",
  zIndex: 100,
};
