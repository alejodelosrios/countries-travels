import React, { useState } from "react";
import styles from "../css/create-activity.module.css";
import CreateActivityForm from "./CreateActivityForm";
import { useEffect } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const CreateActivity = () => {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "none",
    duration: "none",
    season: [],
    countriesId: [],
    isModalOpen: false,
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
    </div>
  );
};

export default CreateActivity;
