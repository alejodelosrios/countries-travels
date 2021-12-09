import React from "react";
import styles from "../css/primary-button.module.css";

const PrimaryButton = (props) => {
  return (
    <>
      <input value={props.name} className={styles.primary} type="button" />
    </>
  );
};

export default PrimaryButton;
