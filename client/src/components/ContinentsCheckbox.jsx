import React from "react";
import { useSelector } from "react-redux";

const ContinentsCheckbox = () => {
  let continents = useSelector((state) => state.continents);
  return (
    <div>
      {continents.map((continent, index) => (
        <div key={index}>
          <label htmlFor={continent}>{continent}</label>
          <input type="checkbox" name={continent} value={continent} />
        </div>
      ))}
    </div>
  );
};

export default ContinentsCheckbox;
