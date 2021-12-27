import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../css/continents-checkbox.module.css";
import { filter_countries } from "../redux/actions";

const ContinentsCheckbox = () => {
  let continents = useSelector((state) => state.continents);
  let filtering_and_ordering = useSelector(
    (state) => state.filtering_and_ordering
  );
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    let obj = {
      ...filtering_and_ordering,
      byContinent: e.target.value,
    };
    dispatch(filter_countries(obj));
  };
  return (
    <form className={styles.container}>
      <div className={styles.checkbox}>
        <input
          type="radio"
          className={styles.hidden}
          name="continent"
          value="all"
          id="all"
          checked={
            filtering_and_ordering.byContinent.includes("all") ? true : false
          }
          onChange={(e) => handleCheckbox(e)}
        />
        <label htmlFor="all">All</label>
        {continents.map((continent, index) => (
          <div key={index}>
            <input
              type="radio"
              className={styles.hidden}
              name="continent"
              value={continent}
              id={continent}
              onChange={(e) => handleCheckbox(e)}
              checked={
                filtering_and_ordering.byContinent.includes(continent)
                  ? true
                  : false
              }
            />
            <label htmlFor={continent}>{continent}</label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ContinentsCheckbox;
