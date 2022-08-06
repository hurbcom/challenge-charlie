import * as React from "react";
import { useImageBing } from "../../../service/imageBing";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const Container = componentFactory<IContainerProps>(
  "Container",
  (props, ref) => {
    const [image, setImage] = React.useState<string>("");
    useImageBing()
      .Get()
      .then((i) => setImage(i));
    const { children } = props;
    const style = { backgroundImage: `url(${image})` };
    return (
      <div ref={ref} className={styles.Container} style={style}>
        <div className={styles.ContainerColor}>{children}</div>
      </div>
    );
  }
);

export default Container;
