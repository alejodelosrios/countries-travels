import React from "react";
import styles from "../css/search-bar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter_countries } from "../redux/actions";

const SearchBar = () => {
  let filterCountries = useSelector((state) => state.filterCountries);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    let obj = { ...filterCountries, byName: e.target.value };
    dispatch(filter_countries(obj));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(filter_countries(e.target.value));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          autoComplete="off"
          name="name"
          type="onSubmit"
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter country name"
        />
      </form>
    </div>
  );
};

export default SearchBar;
