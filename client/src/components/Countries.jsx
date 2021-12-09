import React from "react";
import styles from "../css/countries.module.css";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import Loader from "../pages/Loader";

const Countries = (props) => {
  let countries = useSelector((state) => state.countries);
  //let filterCharacters = useSelector((state) => state.filterCharacters);
  //if (filterCharacters.length > 0) {
  //characters = filterCharacters;
  //}

  return (
    <div className={styles.countriesContainer}>
      {countries.length > 0
        ? countries.map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              name={country.name}
              continent={country.continent}
              flag={country.flag}
            />
          ))
        : setTimeout(() => {
            <Loader />;
          }, 10000)}
    </div>
  );
};

export default Countries;
