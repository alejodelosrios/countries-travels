import React from "react";
import styles from "../css/home.module.css";
import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
import ContinentsCheckbox from "../components/ContinentsCheckbox";
import OrderBy from "../components/OrderBy";

const Home = (props) => {
    return (
        <div className={styles.container}>
            <aside>
                <ContinentsCheckbox />
            </aside>
            <main className={styles.content}>
                <div className={styles.searchBar}>
                    <OrderBy />
                    <Pagination category="countries" />
                </div>
                <Countries />
            </main>
        </div>
    );
};

export default Home;
