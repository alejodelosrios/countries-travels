import React from "react";
import styles from "../css/home.module.css";
import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
import ContinentsCheckbox from "../components/ContinentsCheckbox";
import OrderBy from "../components/OrderBy";
import SearchBar from "../components/SearchBar";

const Home = (props) => {
    return (
        <div className={styles.container}>
            <aside>
                <ContinentsCheckbox />
            </aside>
            <main className={styles.content}>
                <SearchBar />
                <div className={styles.orderBar}>
                    <div className={styles.empty}></div>
                    <Pagination category="countries" />
                    <OrderBy />
                </div>
                <Countries />
            </main>
        </div>
    );
};

export default Home;
