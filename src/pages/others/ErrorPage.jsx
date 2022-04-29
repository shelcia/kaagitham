import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../assets/error.svg";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="d-flex justify-content-center align-items-center bg-darkColor w-100 flex-column"
      style={{ height: "100vh" }}
    >
      <img src={Error} alt="" style={{ maxWidth: "500px" }} />
      <Button
        color="inherit"
        variant="contained"
        onClick={() => navigate("/")}
        className="mt-3"
      >
        Go Home
      </Button>
    </section>
  );
};

export default ErrorPage;
