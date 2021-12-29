import React, { useState, useMemo } from "react";
import styles from "../css/create-activity-form.module.css";
import { useDispatch } from "react-redux";
import { save_activity } from "../redux/actions";
import { Validate } from "./validations/CreateActivity";
import Button from "../components/Button";
import SelectedCountries from "./SelectedCountries";
import CountriesSearch from "./CountriesSearch";

const CreateActivityForm = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  //console.log(countries);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    let season = formData.season;
    if (e.target.checked === true) {
      season.push(e.target.value);
    } else {
      season.splice(season.indexOf(e.target.value), 1);
    }
    setFormData({
      ...formData,
      season: season,
    });
    setErrors(Validate(formData));
  };

  const handleInputChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
    setErrors(Validate({ ...formData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(save_activity(formData));
    setFormData({
      name: "",
      difficulty: "none",
      duration: "none",
      season: [],
      countriesId: [],
      isModalOpen: true,
    });
  };

  const disabeledSubmit = useMemo(() => {
    if (
      errors.name ||
      errors.difficulty ||
      errors.duration ||
      errors.season ||
      errors.countriesId
    )
      return true;
    return false;
  }, [errors]);

  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.container}>
      <div className={styles.group}>
        <label htmlFor="name" data-testid="name-label">
          Name:
        </label>
        <input
          data-testid="name-input"
          type="text"
          name="name"
          onChange={(e) => handleInputChange(e)}
          value={formData.name}
          placeholder="Please enter activity name"
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <div className={styles.groupTwo}>
        <div className={styles.group}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={(e) => handleInputChange(e)}
            className={styles.mainSelect}
          >
            <option value="none">Select an option...</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.difficulty && (
            <p className={styles.error}>{errors.difficulty}</p>
          )}
        </div>
        <div className={styles.group}>
          <label htmlFor="duration">Duration:</label>
          <select
            id="duration"
            value={formData.duration}
            name="duration"
            onChange={(e) => handleInputChange(e)}
            className={styles.mainSelect}
          >
            <option value="none">Select an option...</option>
            <option value="1">1 día</option>
            <option value="2">2 días</option>
            <option value="3">3 días</option>
          </select>
          {errors.duration && <p className={styles.error}>{errors.duration}</p>}
        </div>
      </div>

      <p>Please choose the season (as) in which this activity is practiced</p>
      <div className={styles.groupTwo}>
        <div className={styles.season}>
          <label htmlFor="summer">Summer</label>
          <input
            type="checkbox"
            value="summer"
            name="season"
            onChange={(e) => handleCheck(e)}
            checked={formData.season.includes("summer") ? true : false}
          />
        </div>
        <div className={styles.season}>
          <label htmlFor="winter">Winter</label>
          <input
            type="checkbox"
            value="winter"
            name="season"
            onChange={(e) => handleCheck(e)}
            checked={formData.season.includes("winter") ? true : false}
          />
        </div>
        <div className={styles.season}>
          <label htmlFor="fall">Fall</label>
          <input
            type="checkbox"
            value="fall"
            name="season"
            onChange={(e) => handleCheck(e)}
            checked={formData.season.includes("fall") ? true : false}
          />
        </div>
        <div className={styles.season}>
          <label htmlFor="spring">Spring</label>
          <input
            type="checkbox"
            value="spring"
            name="season"
            onChange={(e) => handleCheck(e)}
            checked={formData.season.includes("spring") ? true : false}
          />
        </div>
      </div>
      {errors.season && <p className={styles.error}>{errors.season}</p>}
      <div className={styles.countrySearch}>
        <CountriesSearch
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
        <SelectedCountries
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
        {errors.countriesId && (
          <p className={styles.error}>{errors.countriesId}</p>
        )}
      </div>
      <Button customStyle="dark" name="Save" disabled={disabeledSubmit} />
    </form>
  );
};

export default CreateActivityForm;
