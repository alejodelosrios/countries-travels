import React from "react";
import styles from "../css/loader.module.css";
import Logo from "../assets/Logo.png";

const Loader = (props) => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.logo} src={Logo} alt="" />
    </div>
  );
};

export default Loader;
