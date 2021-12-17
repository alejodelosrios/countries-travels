import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../css/continents-checkbox.module.css";
import { filter_countries } from "../redux/actions";

const ContinentsCheckbox = () => {
  let continents = useSelector((state) => state.continents);
  let filterCountries = useSelector((state) => state.filterCountries);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    console.log(e.target)
    let obj = {
      ...filterCountries,
        byContinent: e.target.value
    };
    dispatch(filter_countries(obj));
  };
  return (
    <form className={styles.container}>
      {continents.map((continent, index) => (
        <div className={styles.checkbox} key={index}>
          <input
            type="radio"
            className={styles.hidden}
            name="continent"
            value={continent}
            id={continent}
            onChange={(e) => handleCheckbox(e)}
          />
          <label htmlFor={continent}>{continent}</label>
        </div>
      ))}
    </form>
  );
};

export default ContinentsCheckbox;
