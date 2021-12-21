import React from "react";
import styles from "../css/order-by.module.css";
import { useDispatch, useSelector } from "react-redux";
import { order_countries } from "../redux/actions";

const OrderBy = () => {
  const dispatch = useDispatch();
  let filtering_and_ordering = useSelector(
    (state) => state.filtering_and_ordering
  );

  const handleOrderByFilter = (e) => {
    let obj = {
      ...filtering_and_ordering,
      orderBy: e.target.value,
    };
    dispatch(order_countries(obj));
  };
  return (
    <div className={styles.container}>
      <label htmlFor="orderBy">Order By:</label>
      <select
        id="orderBy"
        onChange={(e) => handleOrderByFilter(e)}
        name="orderBy"
        defaultValue={filtering_and_ordering.orderBy}
      >
        <option value="asc">Select...</option>
        <option value="asc">From A-Z</option>
        <option value="dsc">From Z-A</option>
        <option value="hp">Higher population</option>
        <option value="sp">Smaller population</option>
      </select>
    </div>
  );
};

export default OrderBy;
