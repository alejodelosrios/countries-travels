import React from "react";
import styles from "../css/countries.module.css";
import LoaderGif from "../assets/loader.gif";

const Loader = (props) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <img src={LoaderGif} alt="" />
      </div>
    </div>
  );
};

export default Loader;
