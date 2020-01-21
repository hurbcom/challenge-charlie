import React from "react";
import styles from './BackgroundView.module.css'

const BackgroundView = ({url}) => (
  <div className={styles.background} style={{ backgroundImage: `url(${url})` }}></div>
);

export default BackgroundView;