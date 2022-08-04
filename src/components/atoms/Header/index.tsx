import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const Header = componentFactory<IHeaderProps>(
  "Header",
  (props, ref) => {
    const {children} = props
    
    return (
     <header ref={ref} className={styles.Header} >
      {children}
     </header>
    );
  }
);

export default Header;
