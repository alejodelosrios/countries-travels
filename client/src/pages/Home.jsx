import React from "react";
import styles from "../css/home.module.css";
import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
import ContinentsCheckbox from "../components/ContinentsCheckbox";
import OrderBy from "../components/OrderBy";
import SearchBar from "../components/SearchBar";
import { useDispatch } from "react-redux";
import { set_items_per_page } from "../redux/actions";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Home = () => {
    const dispatch = useDispatch();
    let itemsPerPage = useSelector((state) => state.itemsPerPage);

    const handleItemsPerPage = (e) => {
        dispatch(set_items_per_page(e.target.value));
    };
    return (
        <div className={styles.container}>
            <Navbar
                customStyle="light"
                buttonName="Create an Activity"
                buttonRedirect="/activities/create"
            >
                <ContinentsCheckbox />
            </Navbar>
            <main className={styles.content}>
                <div className={styles.smallContainer}>
                    <TopBar />
                    <div className={styles.orderBar}>
                        <SearchBar />
                        <div className={styles.orderContainer}>
                            <div className={styles.itemsPerPage}>
                                <label htmlFor="itemsPerPage">
                                    Items per page:
                                </label>
                                <select
                                    id="itemsPerPage"
                                    onChange={(e) => handleItemsPerPage(e)}
                                    name="itemsPerPage"
                                    defaultValue={itemsPerPage}
                                    className={styles.mainSelect}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                </select>
                            </div>
                            <OrderBy />
                        </div>
                    </div>
                    <Countries />
                    <Pagination category="countries" />
                    <div className={styles.credits}>
                        <p>Made with ❤️ by Manuel A Ramirez</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
