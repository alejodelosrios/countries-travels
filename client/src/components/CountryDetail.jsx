import React from "react";
import styles from "../css/country-detail.module.css";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetail = (props) => {
  const { id } = useParams();
  const countries = useSelector((state) => state.countries);
  //console.log(countries);
  let country = countries.find((e) => e.id === id);
  //console.log(country);
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Detalle de país</h1>
      <ul>
        <li>{country.name}</li>
        <li>{country.continent}</li>
        <input
          value="Volver"
          type="button"
          onClick={() => {
            navigate("/home");
          }}
        />
      </ul>
    </div>
  );
};

export default CountryDetail;
