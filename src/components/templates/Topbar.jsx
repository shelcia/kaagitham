import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Button } from "@mui/material";

const Topbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-light navbar-custom fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <HiOutlineDocumentText
              className="me-2 mb-1"
              style={{ height: "30px" }}
            />
            <b>Kaagitham</b>
          </Link>
          <div>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="me-3"
            >
              <Button color="primary" variant="outlined" size="large">
                Login
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button color="primary" variant="contained" size="large">
                Signup <HiOutlineArrowNarrowRight className="ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
