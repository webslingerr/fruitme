"use client";

import styles from "./styles.module.scss";
import {Animation, MotionSection} from "@/utils/animation";
import {fadeinDown, fadeinDownPhone} from "@/utils/constants";
import {useTranslation} from "react-i18next";

export function Banner() {
  const {t, i18n} = useTranslation("common");

  return (
    <MotionSection>
      <div className={styles.banner}>

        <div className={styles.banner_container}>
          <div className={styles.bannerDetails}>
            <Animation variants={fadeinDown} className={styles.titleBox}>
              <div className={styles.desc}>
                <h3 className={styles.title}>
                  {t("bannerTitle")} <br />
                  {t("bannerSubtitle")}
                </h3>
                <p className={styles.text}>k
                  {t("bannerDesc")}
                </p>
                <ul className={styles.list}>
                  <li>✔ {t("bannerListOne")}</li>
                  <li>✔ {t("bannerListTwo")}</li>
                  <li>✔ {t("bannerListThree")}</li>
                </ul>
              </div>
            </Animation>
          </div>
          <div className={styles.bannerOverlay}></div>
        </div>
      </div>
    </MotionSection>
  );
}