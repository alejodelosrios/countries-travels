import React, { useState } from "react";
import styles from "../css/create-activity.module.css";
import CreateActivityForm from "./CreateActivityForm";
import { useEffect } from "react";
import Navbar from "./Navbar";

const CreateActivity = () => {
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
