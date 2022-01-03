import React, { useEffect } from "react";
import styles from "../css/country-detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../pages/Loader";
import Asia from "../assets/asia.svg";
import Africa from "../assets/africa.svg";
import Americas from "../assets/americas.svg";
import Europe from "../assets/europe.svg";
import Oceania from "../assets/oceania.svg";
import Population from "../assets/population.svg";
import Flag from "../assets/flag.svg";
import Area from "../assets/area.svg";
import Capital from "../assets/capital.svg";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { getCountryById } from "../redux/actions";

const CountryDetail = () => {
  const { id } = useParams();
  //let countries = useSelector((state) => state.countries);
  let countryById = useSelector((state) => state.countryById);
  let loading = useSelector((state) => state.loading);
  //let country = countries.find((e) => e.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  return (
    <div className={styles.container}>
      {loading === true ? (
        <Loader />
      ) : countryById.hasOwnProperty("name") ? (
        <div className={styles.wrap}>
          <TopBar />
          <Navbar customStyle="dark" buttonName="Back" buttonRedirect="/home">
            {/* Aquí se utiliza la propiedad children */}
            <div className={styles.sidebarTexts}>
              <h1>{countryById.name}</h1>
              <h2>({countryById.fifa})</h2>
              <div className={styles.region}>
                <h3>{countryById.continent}</h3>
                <h4>{countryById.subregion}</h4>
              </div>
            </div>
          </Navbar>
          <main className={styles.content}>
            {/* Switch para hacer dinámica la imagen del continente */}
            {(function () {
              switch (countryById.continent) {
                case "Americas":
                  return (
                    <img
                      className={styles.bgImg}
                      src={Americas}
                      alt="continent img"
                    />
                  );
                case "Africa":
                  return (
                    <img
                      className={styles.bgImg}
                      src={Africa}
                      alt="continent img"
                    />
                  );
                case "Asia":
                  return (
                    <img
                      className={styles.bgImg}
                      src={Asia}
                      alt="continent img"
                    />
                  );
                case "Europe":
                  return (
                    <img
                      className={styles.bgImg}
                      src={Europe}
                      alt="continent img"
                    />
                  );
                case "Oceania":
                  return (
                    <img
                      className={styles.bgImg}
                      src={Oceania}
                      alt="continent img"
                    />
                  );
                default:
              }
            })()}
            <div className={styles.activities}>
              <h1>Touristic Activities</h1>
              {loading === true ? (
                <Loader />
              ) : countryById.Activities.length > 0 ? (
                countryById.Activities.map((activity, index) => (
                  <div className={styles.activitiesGroup} key={index}>
                    <div className={styles.item}>
                      <h4>Activity:</h4>
                      <p>{activity.name}</p>
                    </div>
                    <div className={styles.item}>
                      <h4>Difficulty:</h4>
                      <p>{activity.difficulty}</p>
                    </div>
                    <div className={styles.item}>
                      <h4>Duration:</h4>
                      <p>{activity.duration}</p>
                    </div>
                    <div className={styles.item}>
                      <h4>Seasons:</h4>
                      <div className={styles.seasons}>
                        {Object.values(activity.season).map((season, index) => {
                          return <p key={index}>{season}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>There are not touristic activities for this country</p>
              )}
            </div>
            <div className={styles.stats}>
              <div className={styles.item}>
                <img className={styles.logo} src={Flag} alt="flag icon" />
                <div>
                  <img
                    className={styles.cardImg}
                    src={countryById.flag}
                    alt={countryById.name}
                  />
                </div>
              </div>
              <div className={styles.item}>
                <img
                  className={styles.logo}
                  src={Population}
                  alt="population icon"
                />
                <div>
                  <p className={styles.statTitle}>
                    {(countryById.population / 1000000).toFixed(2)}
                  </p>
                  <p className={styles.statSubtitle}>million</p>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.logo} src={Area} alt="area icon" />
                <div>
                  <p className={styles.statTitle}>
                    {(countryById.area / 1000000).toFixed(2)}
                  </p>
                  <p className={styles.statSubtitle}>million</p>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.logo} src={Capital} alt="capital icon" />
                <div>
                  <p className={styles.statTitle}>{countryById.capital}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <p>This country Id doesn't exist.</p>
      )}
    </div>
  );
};

export default CountryDetail;
