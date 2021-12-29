import React from "react";
import styles from "../css/modal.module.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { get_countries } from "../redux/actions";

const Modal = (props) => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    props.setFormData({
      ...props.formData,
      isModalOpen: !props.formData.isModalOpen,
    });
    dispatch(get_countries());
  };

  //if (props.formData.isModalOpen) {
  //document.body.classList.add("active-modal");
  //} else {
  //document.body.classList.remove("active-modal");
  //}
  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <Button
          onClick={toggleModal}
          customStyle={props.customStyle === "light" ? "dark" : "light"}
          name={props.buttonName}
        />
      </div>
    </div>
  );
};

export default Modal;
