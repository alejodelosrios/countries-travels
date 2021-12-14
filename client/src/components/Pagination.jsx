import React, { useState } from "react";
import styles from "../css/pagination.module.css";
import { set_page_current_items } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Pagination() {
  let [go, setGo] = useState("");
  let state = useSelector((state) => state);
  let { itemsPerPage, currentPage, countries, filterCountries } = state;
  //console.log(currentPage);

  // Calculo el número de paginas para el páginado, de acuerdo a
  // los itemsPerPage seleccionados
  let pageNumbers = [];
  if (filterCountries.length === 0) {
    for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    for (
      let i = 1;
      i <= Math.ceil(filterCountries.length / itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
  }
  const dispatch = useDispatch();
  const changeCurrentPage = (e) => {
    //console.log(+e.target.value);
    dispatch(set_page_current_items(+e.target.value));
  };
  const prevPage = () => {
    let number = currentPage - 1;
    if (number < 1) {
      return null;
    }
    dispatch(set_page_current_items(number));
  };
  const nextPage = () => {
    let number = currentPage + 1;
    if (number > pageNumbers.length) {
      return null;
    }
    dispatch(set_page_current_items(+currentPage + 1));
  };

  const handleInputChange = (e) => {
    setGo(e.target.value);
  };
  const handleGoPage = (e) => {
    e.preventDefault();
    dispatch(set_page_current_items(+go));
    setGo("");
  };

  return (
    <nav className={styles.container}>
      <button value="prev" onClick={() => prevPage()}>
        Prev
      </button>
      {pageNumbers.map((number) => {
        if (
          number === 1 ||
          number === 2 ||
          number === 3 ||
          number === pageNumbers.length - 2 ||
          number === pageNumbers.length - 1 ||
          number === pageNumbers.length
        ) {
          return (
            <button
              className={number === currentPage ? styles.activeButton : ""}
              value={number}
              key={number}
              onClick={(e) => changeCurrentPage(e)}
            >
              {number}
            </button>
          );
        } else if (
          number === currentPage &&
          currentPage >= 5 &&
          currentPage <= pageNumbers.length - 4
        ) {
          return (
            <div key={number}>
              <button>...</button>
              <button
                className={number === currentPage ? styles.activeButton : ""}
                value={number}
                onClick={(e) => changeCurrentPage(e)}
              >
                {number}
              </button>
              <button>...</button>
            </div>
          );
        } else if (number === currentPage && currentPage === 4) {
          return (
            <div key={number}>
              <button
                className={number === currentPage ? styles.activeButton : ""}
                value={number}
                onClick={(e) => changeCurrentPage(e)}
              >
                {number}
              </button>
              <button>...</button>
            </div>
          );
        } else if (
          number === currentPage &&
          currentPage === pageNumbers.length - 3
        ) {
          return (
            <div key={number}>
              <button>...</button>
              <button
                className={number === currentPage ? styles.activeButton : ""}
                value={number}
                onClick={(e) => changeCurrentPage(e)}
              >
                {number}
              </button>
            </div>
          );
        } else if (
          number === 4 &&
          (currentPage <= 4 || currentPage >= pageNumbers.length - 2)
        ) {
          return (
            <div key={number}>
              <button>...</button>
            </div>
          );
        } else {
          return null;
        }
      })}

      <button value="next" onClick={() => nextPage()}>
        Next
      </button>
      <form onSubmit={(e) => handleGoPage(e)}>
        <input
          type="number"
          name="go"
          value={go}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Go</button>
      </form>
    </nav>
  );
}

export default Pagination;
