import React, { useState } from "react";
import styles from "../css/search-bar.module.css";
import { useDispatch } from "react-redux";
import { get_country_by_name } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(get_country_by_name(input));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          autoComplete="off"
          name="name"
          type="onSubmit"
          onChange={(e) => handleInputChange(e)}
          placeholder="Search country by name"
          value={input}
        />
        <div className={styles.search}>
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
