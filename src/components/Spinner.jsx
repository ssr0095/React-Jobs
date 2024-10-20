import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#000"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinner;
