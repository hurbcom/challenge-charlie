import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";
import { Message } from 'semantic-ui-react'

const MessageNegative = componentFactory<IMessageNegativeProps>(
  "MessageNegative",
  (props, ref) => {
    const { mensage } = props;
    return (
      <Message negative ref={ref} className={styles.MessageNegative}>
        <Message.Header>
          {mensage}
        </Message.Header>
      </Message>
    );
  }
);

export default MessageNegative;
