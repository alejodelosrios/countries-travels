import React from "react";
import styles from "../css/button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={
          props.customStyle === "dark" ? styles.darkBtn : styles.lightBtn
        }
        onClick={props.onClick}
        disabled={props.disabled ? props.disables : ""}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
