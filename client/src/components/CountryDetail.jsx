import React from "react";
import styles from "../css/country-detail.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../pages/Loader";
import Asia from "../assets/asia.svg";
import Africa from "../assets/africa.svg";
import Americas from "../assets/americas.svg";
import Europe from "../assets/europe.svg";
import Oceania from "../assets/oceania.svg";
import Population from "../assets/population.svg";
import Area from "../assets/area.svg";
import Capital from "../assets/capital.svg";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const CountryDetail = () => {
  const { id } = useParams();
  let countries = useSelector((state) => state.countries);
  let loading = useSelector((state) => state.loading);
  let country = countries.find((e) => e.id === id);

  return (
    <div className={styles.container}>
      {loading === true ? (
        <Loader />
      ) : countries.length > 0 ? (
        <div className={styles.wrap}>
          <TopBar />
          <Navbar customStyle="dark" buttonName="Back" buttonRedirect="/home">
            {/* Aquí se utiliza la propiedad children */}
            <div className={styles.sidebarTexts}>
              <h1>{country.name}</h1>
              <div className={styles.region}>
                <h3>{country.continent}</h3>
                <h4>{country.subregion}</h4>
                <h4>
                  {country.Activities.length > 0
                    ? country.Activities[country.Activities.length - 1].name
                    : null}
                </h4>
              </div>
            </div>
          </Navbar>
          <main className={styles.content}>
            {/* Switch para hacer dinámica la imagen del continente */}
            {(function () {
              switch (country.continent) {
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
            <div className={styles.stats}>
              <div className={styles.item}>
                <img
                  className={styles.logo}
                  src={Population}
                  alt="population icon"
                />
                <div>
                  <p className={styles.statTitle}>
                    {(country.population / 1000000).toFixed(2)}
                  </p>
                  <p className={styles.statSubtitle}>million</p>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.logo} src={Area} alt="area icon" />
                <div>
                  <p className={styles.statTitle}>
                    {(country.area / 1000000).toFixed(2)}
                  </p>
                  <p className={styles.statSubtitle}>million</p>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.logo} src={Capital} alt="capital icon" />
                <div>
                  <p className={styles.statTitle}>{country.capital}</p>
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
