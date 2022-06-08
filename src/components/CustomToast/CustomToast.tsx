import React from "react";

import "components/CustomToast/CustomToast.scss";
import { useStore } from "store/store";

type ownProps = {
  toastMessage: string;
};

const CustomToast = (props: ownProps) => {
  const { setToastMessage } = useStore();

  const handleClick = () => {
    setToastMessage(null);
  };

  return (
    <div className="toast" onClick={handleClick}>
      <div className="toast__message">{props.toastMessage}</div>
    </div>
  );
};

export default CustomToast;
