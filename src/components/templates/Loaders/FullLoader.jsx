import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const FullLoader = ({ loading }) => {
  return (
    <section classsName="d-flex justify-content-center align-items-center bg-darkColor h-100 w-100">
      <PropagateLoader color={"#007fff"} loading={loading} size={40} />
    </section>
  );
};

export default FullLoader;
