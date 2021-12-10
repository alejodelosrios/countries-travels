import React from "react";
import styles from "../css/home.module.css";
import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
//import { useDispatch } from "react-redux";
//import { get_countries } from "../redux/actions";

const Home = (props) => {
    //const dispatch = useDispatch();
    //useEffect(() => {
    //setTimeout(() => {
    //dispatch(get_countries());
    //}, [3000, dispatch]);
    //}, [dispatch]);
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Pagination category="countries" />
            <Countries />
        </div>
    );
};

export default Home;
