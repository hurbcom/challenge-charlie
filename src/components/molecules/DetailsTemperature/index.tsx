import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const DetailsTemperature = componentFactory<IDetailsTemperatureProps>(
  "DetailsTemperature",
  (props, ref) => {
    const {
      climate = 'Carregando',
      humidity = 'Carregando',
      pressure = 'Carregando',
      wind = 'Carregando',
      
      className = "",
      ...rest
    } = props;
    const style = `${className} ${styles.DetailsTemperature}`;    
    return (
      <div ref={ref} className={style} {...rest}>
        <h2>{climate}</h2>
        <section>
        <span >
       {`${wind}`}                   
        </span>
        <span >
        {`${humidity}`}
        </span>
        <span >
        {`${pressure}`}                   
        </span>
        </section>
      </div>
    );
  }
);

export default DetailsTemperature;
