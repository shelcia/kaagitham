import React from "react";
import { Divider, IconButton, Tooltip, Link } from "@mui/material";
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
              <Link href="https://shelcia-dev.me/">Shelcia</Link>.
            </p>
          </div>
          <div className="col-sm-6 d-flex align-items-center justify-content-end">
            <Tooltip title="Check code on Github" aria-label="github">
              <Link href="https://github.com/shelcia/kaagitham" target="_blank">
                <IconButton aria-label="github" color="primary">
                  <FiGithub />
                </IconButton>
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
