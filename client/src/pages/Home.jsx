import React, { useEffect } from "react";
import styles from "../css/home.module.css";
import Countries from "../components/Countries";
import { useDispatch } from "react-redux";
import { get_countries } from "../redux/actions";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_countries());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Countries />
    </div>
  );
};

export default Home;
