import React from "react";
import { set_page_current_items } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Pagination() {
  let state = useSelector((state) => state);
  let { itemsPerPage, currentPage } = state;
  console.log(currentPage);

  // Calculo el número de paginas para el páginado, de acuerdo a
  // los itemsPerPage seleccionados
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(state.countries.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  const changeCurrentPage = (e) => {
    dispatch(set_page_current_items(e.target.value));
  };
  const prevPage = () => {
    let number = +currentPage - 1;
    if (number < 1) {
      return null;
    }
    dispatch(set_page_current_items(number));
  };
  const nextPage = () => {
    let number = +currentPage + 1;
    if (number > pageNumbers.length) {
      return null;
    }
    dispatch(set_page_current_items(+currentPage + 1));
  };

  //else if (number === currentPage - 1 || number === currentPage + 1) {
  //return <button key={number}>...</button>;
  //}

  return (
    <nav>
      <button value="prev" onClick={() => prevPage()}>
        Prev
      </button>
      {pageNumbers.map((number) => {
        if (
          number === 1 ||
          number === 2 ||
          number === 3 ||
          number === currentPage ||
          number === pageNumbers.length - 2 ||
          number === pageNumbers.length - 1 ||
          number === pageNumbers.length
        ) {
          return (
            <button
              value={number}
              key={number}
              onClick={(e) => changeCurrentPage(e)}
            >
              {number}
            </button>
          );
        } else if (
          number === currentPage &&
          number > 3 &&
          number < pageNumbers.length - 2
        ) {
          return (
            <>
              <button key="prevPoints">...</button>
              <button value={number} onClick={(e) => changeCurrentPage(e)}>
                {number}
              </button>
              <button key="nextPoints">...</button>
            </>
          );
        } else {
          return null;
        }
      })}

      <button value="next" onClick={() => nextPage()}>
        Next
      </button>
    </nav>
  );
}

export default Pagination;
