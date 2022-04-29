import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const FullLoader = ({ loading }) => {
  return (
    <section
      className="d-flex justify-content-center align-items-center bg-darkColor w-100"
      style={{ height: "100vh" }}
    >
      <PropagateLoader color={"#007fff"} loading={loading} size={40} />
    </section>
  );
};

export const PartLoader = ({ loading }) => {
  return (
    <section className="d-flex justify-content-center align-items-center h-100 w-100">
      <PropagateLoader color={"#007fff"} loading={loading} size={15} />
    </section>
  );
};
