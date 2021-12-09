import React from "react";
import styles from "../css/welcome.module.css";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className={styles.mainContainer}>
      <h1>Welcome</h1>
      <Link to="/home">
        <PrimaryButton name="Enter" />
      </Link>
    </div>
  );
};

export default Welcome;
