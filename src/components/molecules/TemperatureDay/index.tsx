import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const TemperatureDay = componentFactory<ITemperatureDayProps>(
  "TemperatureDay",
  (props, ref) => {
    const {
      dayDescription = "",
      temperature = "0",      
      className = "",
      children,
      minTemperature = undefined,
      maxTemperature = undefined,
      onClick,
      ...rest
    } = props;    
    const style = `${className} ${styles.TemperatureDay}`;
    return (
      <div ref={ref} className={style} {...rest}>
        <section className={styles.Section}>
          <h2>{dayDescription}</h2>
          <span onClick={onClick}>{`${temperature}`}</span>          
            <div className={styles.MinMaxTemperature}>
              <span onClick={onClick}>{`${minTemperature}`}</span>
              <span onClick={onClick}>{`${maxTemperature}`}</span>
            </div>      
        </section>
        {children}
      </div>
    );
  }
);

export default TemperatureDay;
