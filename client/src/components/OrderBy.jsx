import React from "react";
import styles from "../css/order-by.module.css";
import { useDispatch } from "react-redux";
import { order_countries } from "../redux/actions";

const OrderBy = () => {
  const dispatch = useDispatch();
  const handleOrderByFilter = (e) => {
    dispatch(order_countries(e.target.value));
  };
  return (
    <div className={styles.container}>
      <label htmlFor="orderBy">Order By:</label>
      <select
        id="orderBy"
        onChange={(e) => handleOrderByFilter(e)}
        name="orderBy"
      >
        <option value="asc" select="true">
          Select...
        </option>
        <option value="asc">From A-Z</option>
        <option value="dsc">From Z-A</option>
        <option value="hp">Higher population</option>
        <option value="sp">Smaller population</option>
      </select>
    </div>
  );
};

export default OrderBy;
