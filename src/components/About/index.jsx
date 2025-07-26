"use client";

import React from "react";
import styles from "./style.module.scss";
import {useTranslation} from "@/hooks/useTranslation";

function About() {
  const {t, i18n} = useTranslation("common");

  return (
    <section id="aboutus" className={styles.aboutUs}>
      <div className={styles.aboutContainer}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Fruitme</h3>
          <hr />
          <p className={styles.description}>
            {t("trustMessage")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
