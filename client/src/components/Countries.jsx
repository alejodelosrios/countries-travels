import React from "react";
import styles from "../css/countries.module.css";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import Loader from "../pages/Loader";

const Countries = (props) => {
  let currentItems = useSelector((state) => state.currentItems);

  //let filterCharacters = useSelector((state) => state.filterCharacters);
  //if (filterCharacters.length > 0) {
  //characters = filterCharacters;
  //}

  //let countries = useSelector((state) => state.countries);
  //let itemsperPage = useSelector((state) => state.itemsperPage);
  //const current = countries.slice(0, 10);
  //console.log(current);

  //const dispatch = useDispatch();
  //useEffect(() => {
  //dispatch(set_current_items(current));
  //}, [dispatch]);
  return (
    <div className={styles.countriesContainer}>
      {currentItems.length > 0 ? (
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
        <Loader />
      )}
    </div>
  );
};

export default Countries;
