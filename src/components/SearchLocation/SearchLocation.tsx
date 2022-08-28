import React from 'react';
import styles from "./styles.module.scss";


const SearchLocation: React.FC = () => {
  return (
    <input placeholder="Rio de Janeiro, Rio de Janeiro" className={styles.input} aria-label="location" type="text" />
  );
}

export default SearchLocation;