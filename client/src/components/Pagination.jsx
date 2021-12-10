import React from "react";
import { set_current_page, set_current_items } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Pagination({ category }) {
  const state = useSelector((state) => state);
  const { itemsPerPage, currentPage } = state;
  category = "countries";
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state[category].slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(state[category].length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  const changeCurrentPage = (e) => {
    dispatch(set_current_page(e.target.value));
    dispatch(set_current_items(currentItems));
  };

  return (
    <nav>
      {pageNumbers.map((number) => (
        <button
          value={number}
          key={number}
          onClick={(e) => changeCurrentPage(e)}
        >
          {number}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;
