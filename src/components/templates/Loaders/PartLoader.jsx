import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const PartLoader = ({ loading }) => {
  return (
    <section className="d-flex justify-content-center align-items-center h-100 w-100">
      <PropagateLoader color={"#007fff"} loading={loading} size={15} />
    </section>
  );
};

export default PartLoader;
