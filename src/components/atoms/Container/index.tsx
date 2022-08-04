import * as React from "react";
import { useImageBing } from "../../../service/imageBing";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";


const Container = componentFactory<IContainerProps>(
  "Container",
  (props, ref) => {
    const {children} = props
    const image = useImageBing().Get()
    const previewUrl = 'https://www.bing.com/th?id=OHR.HickmanBridge_PT-BR3632714538_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
    return (

     <div ref={ref} className={styles.Container} style={{backgroundImage:`url(${previewUrl})`}}>
      <div className={styles.ContainerColor}>
      {children}
      </div>
     </div>

    );
  }
);

export default Container;
