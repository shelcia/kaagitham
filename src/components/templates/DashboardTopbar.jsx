import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

const DashboardTopbar = () => {
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
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="primary" variant="contained" size="large">
              Logout <FiLogOut className="ml-2" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DashboardTopbar;
