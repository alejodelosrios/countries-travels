import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../css/activities-select.module.css";
import { filter_countries } from "../redux/actions";

const ActivitiesSelect = () => {
  let activities = useSelector((state) => state.activities);
  let filtering_and_ordering = useSelector(
    (state) => state.filtering_and_ordering
  );
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    let obj = {
      ...filtering_and_ordering,
      byActivity: e.target.value,
    };
    dispatch(filter_countries(obj));
  };
  return (
    <div className={styles.container}>
      <label htmlFor="byActivity">Filter by Activity:</label>
      <select
        className={styles.mainSelect}
        id="byActivity"
        onChange={(e) => handleSelect(e)}
        name="byActivity"
        defaultValue={filtering_and_ordering.byActivity}
      >
        <option value="all">All</option>
        {activities.map((activity, index) => {
          return (
            <option key={index} value={activity}>
              {activity}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ActivitiesSelect;
