import React from "react";
import { Divider, IconButton, Tooltip, Link } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="footer">
      <Divider color="primary" />
      <div className="container text-white h-100">
        <div className="row h-100">
          <div className="col-sm-6 d-flex align-items-center">
            <p className="mb-0">
              MIT Licensed. Created By{"  "}
              <Link href="https://shelcia-portfolio.netlify.app/">Shelcia</Link>
              .
            </p>
          </div>
          <div className="col-sm-6 d-flex align-items-center justify-content-end">
            <Tooltip title="Check code on Github" aria-label="github">
              <IconButton aria-label="github" color="primary">
                <FiGithub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
