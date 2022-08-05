import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import LoadSpinner from "../../atoms/LoadSpinner";
import styles from "./index.module.scss";

const LoadContainer = componentFactory(
  "TemperatureDay",
  (props, ref) => {
    return (
      <div ref={ref} className={styles.LoadContainer} >
        <LoadSpinner/>       
      </div>
    );
  }
);

export default LoadContainer;
