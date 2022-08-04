import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import Header from "../../atoms/Header";
import Image from "next/image";
import compass from "../../../../public/44.svg";
import styles from "./index.module.scss";
import Input from "../../atoms/Input";

const InternalHeader = componentFactory<IInternalHeaderProps>("InternalHeader", (props, ref) => {
  const {value, onChange} = props
  return (
    <Header >
      <span className={styles.iconLocation}>
        <Image
          src={compass}
          alt={"compass"}
          layout="responsive"
          objectFit="cover"
          width={50}
          height={50}
        />
      </span>
      <Input defaultValue={value} onChange={onChange} />
    </Header>
  );
});

export default InternalHeader;
