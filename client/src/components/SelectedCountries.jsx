import React from "react";
import { useSelector } from "react-redux";
import styles from "../css/selected-countries.module.css";

const SelectedCountries = ({ formData, setFormData }) => {
  let countries = useSelector((state) => state.countries);

  const removeFromCountries = (id) => {
    let newCountries = formData.countriesId;
    newCountries.splice(newCountries.indexOf(id), 1);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        countriesId: newCountries,
      };
    });
  };

  return (
    <div className={styles.container}>
      <p>Selected countries:</p>
      <ul className={styles.selectedCountries}>
        {formData.countriesId.length > 0
          ? formData.countriesId.map((id) => {
              let country = countries.find((e) => e.id === id);
              return (
                <li key={id}>
                  {country.name}
                  <span onClick={(id) => removeFromCountries(id)}>x</span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default SelectedCountries;
