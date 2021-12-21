import React, { useState, useMemo } from "react";
import styles from "../css/create-activity.module.css";
import { useDispatch } from "react-redux";
import { save_activity } from "../redux/actions";
import { Validate } from "./validations/CreateActivity";

function CreateActivity() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "none",
    duration: "none",
    season: [],
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    setFormData((prevFormData) => {
      if (name === "season") {
        if (!prevFormData.season.includes(value)) {
          formData.season.push(value);
        }
        return {
          ...formData,
        };
      } else {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value,
          countriesId: ["1", "2"],
        };
      }
    });
    setErrors(Validate({ ...formData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Envió");
    console.log(formData);
    dispatch(save_activity(formData));
  };

  const disabeledSubmit = useMemo(() => {
    if (errors.name || errors.difficulty || errors.duration) return true;
    return false;
  }, [errors]);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <p>Create Activity</p>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
          placeholder="Enter activity name"
        />
        {errors.name && <p>{errors.name}</p>}
        <select id="difficulty" name="difficulty" onChange={handleInputChange}>
          <option value="none">Select an option...</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        {errors.difficulty && <p>{errors.difficulty}</p>}
        <select id="duration" name="duration" onChange={handleInputChange}>
          <option value="none">Select an option...</option>
          <option value="1">1 día</option>
          <option value="2">2 días</option>
          <option value="3">3 días</option>
        </select>
        {errors.duration && <p>{errors.duration}</p>}
        <label htmlFor="summer">Summer</label>
        <input
          type="checkbox"
          value="summer"
          name="season"
          onChange={handleInputChange}
        />
        <label htmlFor="winter">Winter</label>
        <input
          type="checkbox"
          value="winter"
          name="season"
          onChange={handleInputChange}
        />
        <label htmlFor="fall">Fall</label>
        <input
          type="checkbox"
          value="fall"
          name="season"
          onChange={handleInputChange}
        />
        <label htmlFor="spring">Spring</label>
        <input
          type="checkbox"
          value="spring"
          name="season"
          onChange={handleInputChange}
        />
        <button disabled={disabeledSubmit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateActivity;
//{errors.name &&<p>{errors.name}</p>}
