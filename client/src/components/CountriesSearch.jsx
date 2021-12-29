import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search_countries } from "../redux/actions";
import styles from "../css/countries-search.module.css";
import { Validate } from "./validations/CreateActivity";

const CountriesSearch = ({ formData, setFormData, errors, setErrors }) => {
  const dispatch = useDispatch();
  let searchCountries = useSelector((state) => state.searchCountries);
  let countries = useSelector((state) => state.countries);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    dispatch(search_countries(input));
  };
  const handleOnclick = (e) => {
    e.preventDefault();
    if (!formData.countriesId.includes(e.target.value + "")) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          countriesId: [...prevFormData.countriesId, e.target.value + ""],
        };
      });
      // Elimino la propiedad countriesId de los errores
      // ya que  si envio formData este todavía no se ha actualizado y
      // me muestra el error para el primer pais
      let newErrors = delete errors.countriesId;
      setErrors(newErrors);
    }
  };

  // Asegura que siempre que se renderize el componente
  // el listado de paises esté completo
  var countriesForSearch;
  if (input.length > 0) {
    countriesForSearch = searchCountries;
  } else {
    countriesForSearch = countries;
  }

  return (
    <div className={styles.container}>
      <p>Please select the countries where this activity is practiced</p>
      <input
        type="text"
        autoComplete="off"
        name="country"
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter country name"
        value={input}
      />
      <ul className={styles.countriesList}>
        {countriesForSearch.length > 0
          ? countriesForSearch.map((country) => (
              <li
                key={country.id}
                value={country.id}
                onClick={(e) => {
                  handleOnclick(e);
                }}
              >
                {country.name}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CountriesSearch;
