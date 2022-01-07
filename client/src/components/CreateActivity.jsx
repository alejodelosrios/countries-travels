import React, { useState } from "react";
import styles from "../css/create-activity.module.css";
import CreateActivityForm from "./CreateActivityForm";
import { useEffect } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const CreateActivity = () => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "none",
    duration: "none",
    season: [],
    countriesId: [],
  });
  useEffect(() => {});
  return (
    <div className={styles.container}>
      <TopBar />
      <Navbar
        customStyle="dark"
        title="Create Activity"
        buttonName="Back"
        buttonRedirect="/home"
      />
      <main className={styles.content}>
        <CreateActivityForm formData={formData} setFormData={setFormData} />
      </main>
      {isModalOpen.val && (
        <Modal
          formData={formData}
          setFormData={setFormData}
          title="Touristic Activities"
          message={isModalOpen.msg}
          buttonName="Add a new activity"
          customStyle="light"
        />
      )}
    </div>
  );
};

export default CreateActivity;
