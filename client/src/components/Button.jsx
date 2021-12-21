import React from "react";
import styles from "../css/button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.cta} onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
};

export default Button;
