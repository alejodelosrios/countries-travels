import React from "react";
import styles from "../css/countries.module.css";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import Loader from "../pages/Loader";

const Countries = (props) => {
  let currentItems = useSelector((state) => state.currentItems);
  let loading = useSelector((state) => state.loading);

  return (
    <div className={styles.countriesContainer}>
      {loading === true ? (
        <Loader />
      ) : currentItems.length > 0 ? (
        currentItems.map((country) => (
          <CountryCard
            key={country.id}
            id={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}
          />
        ))
      ) : (
        <p>There are not countries for this search</p>
      )}
    </div>
  );
};

export default Countries;
