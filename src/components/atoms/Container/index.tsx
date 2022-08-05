import * as React from "react";
import { useImageBing } from "../../../service/imageBing";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";


const Container = componentFactory<IContainerProps>(
  "Container",
  (props, ref) => {
    const {children} = props
    const previewImg = `https://picsum.photos/1920/1080`
    const style = {backgroundImage:`url(${previewImg})`}
    return (

     <div ref={ref} className={styles.Container} style={style}>
      <div className={styles.ContainerColor}>
      {children}
      </div>
     </div>

    );
  }
);

export default Container;
