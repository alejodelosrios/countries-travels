import React from "react";
import styles from "../css/primary-button.module.css";

const PrimaryButton = (props) => {
  return (
    <>
      <div className={styles.cta}>
        <span>{props.name}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div>
    </>
  );
};

export default PrimaryButton;
