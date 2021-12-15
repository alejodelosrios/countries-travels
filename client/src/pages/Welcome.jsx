import React from "react";
import styles from "../css/welcome.module.css";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-big.png";

const Welcome = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="site logo" />
      <Link to="/home">
        <PrimaryButton name="Enter" />
      </Link>
    </div>
  );
};

export default Welcome;
