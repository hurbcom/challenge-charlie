import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const LoadSpinner = componentFactory(
  "LoadSpinner",
  (props, ref) => {   
    return (
      <div className={styles.ldsFacebook} ref={ref}>
        <div></div>
        <div></div>
        <div></div>        
      </div>
    );
  }
);

export default LoadSpinner;
