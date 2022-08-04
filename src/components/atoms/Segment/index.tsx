import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";


const Segment = componentFactory<ISegmentProps>(
  "Segment",
  (props, ref) => {
    const {children, className = '', ...rest} = props  
    const style = `${className} ${styles.Segment}`;
    return (
     <div ref={ref} className={style} {...rest}  >
      {children}     
     </div>
    );
  }
);

export default Segment;
