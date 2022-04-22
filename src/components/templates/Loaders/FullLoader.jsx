import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const FullLoader = ({ loading }) => {
  return (
    <section
      className="d-flex justify-content-center align-items-center bg-darkColor"
      style={{ height: "100vh", width: "100%" }}
    >
      <PropagateLoader color={"#007fff"} loading={loading} size={40} />
    </section>
  );
};

export default FullLoader;
