import React from "react";
import styles from "../css/modal.module.css";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { get_countries, setIsModalOpen } from "../redux/actions";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();

  // Cuando se da click en el boton on por fuera del modal
  const toggleModal = () => {
    if (isModalOpen.type === "success") {
      props.setFormData({
        name: "",
        difficulty: "none",
        duration: "none",
        season: [],
        countriesId: [],
      });
    }
    dispatch(setIsModalOpen({ val: false, msg: "" }));
    dispatch(get_countries());
  };
  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <p
          className={
            isModalOpen.type === "success" ? styles.successMsg : styles.errorMsg
          }
        >
          {props.message}
        </p>
        {isModalOpen.type === "success" ? (
          <div className={styles.buttonsContainer}>
            <Link to="/home">
              <Button
                onClick={toggleModal}
                customStyle={props.customStyle === "light" ? "light" : "dark"}
                name="Go Home"
              />
            </Link>
            <Button
              onClick={toggleModal}
              customStyle={props.customStyle === "light" ? "dark" : "light"}
              name={props.buttonName}
            />
          </div>
        ) : (
          <div className={styles.buttonsContainer}>
            <Button
              onClick={toggleModal}
              customStyle={props.customStyle === "light" ? "dark" : "light"}
              name="Close & correct"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
