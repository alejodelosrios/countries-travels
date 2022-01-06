import React from "react";
import styles from "../css/page-not-found.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Page Not Found - 404</h1>
                <Link to="/home">
                    <button className={styles.darkBtn}>Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
