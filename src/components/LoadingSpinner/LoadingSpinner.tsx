import React from "react";

import "components/LoadingSpinner/LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__loading"></div>
    </div>
  );
};

export default LoadingSpinner;
