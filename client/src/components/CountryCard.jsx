import React from "react";
import styles from "../css/country-card.module.css";
import { Link } from "react-router-dom";

const CountryCard = ({ id, name, continent, flag }) => {
  return (
    <Link
      to={`/country/${id}`}
      style={{
        textDecoration: "none",
        color: "#002448",
        width: "150px",
        height: "150px",
      }}
    >
      <div className={styles.card}>
        <img className={styles.cardImg} src={flag} alt={name} />
        <div className={styles.cardBody}>
          <div className={styles.countryTitle}>{name}</div>
          <div className={styles.continent}>{continent}</div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
