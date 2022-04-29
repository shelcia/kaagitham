import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Button } from "@mui/material";

const DashboardTopbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

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
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={logout}
            >
              Logout <FiLogOut className="ms-2" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardTopbar;
