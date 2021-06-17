import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Topbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-light navbar-custom fixed-top">
        <Link className="navbar-brand" to="/">
          <HiOutlineDocumentText
            className="mr-2 mb-1"
            style={{ height: "30px" }}
          />
          <b>Kaagitham</b>
        </Link>
        <div>
          <Link to="/login" style={{ textDecoration: "none" }} className="mr-3">
            <Button color="primary" variant="outlined" size="large">
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button color="primary" variant="contained" size="large">
              Signup <HiOutlineArrowNarrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
