import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";


const Input = componentFactory<React.InputHTMLAttributes<HTMLInputElement>>(
  "Input",
  (props, ref) => {
    const {children, className = '', ...rest} = props  
    const style = `${className} ${styles.Input}`;
    return (
      <input ref={ref} className={style} {...rest} />
    );
  }
);

export default Input;
