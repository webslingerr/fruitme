"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "@/hooks/useTranslation";

export default function Frukt() {
  const {t, i18n} = useTranslation("common");

  return (
    <section id="kundcenter" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>{t("ourMission")}</h2>
          <p className={styles.paragraph}>
            {t("paragraphOne")}
          </p>
          <p className={styles.subHeader}>
            <strong>
              {t("paragraphTwo")}
            </strong>
          </p>
          <p className={styles.paragraph}>
            {t("paragraphThree")}
          </p>
          <p className={styles.paragraph}>
            {t("paragraphFour")}
          </p>
          <p className={styles.note}>
            <em>
              {t("paragraphFive")}
            </em>
          </p>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/images/about-us.png"
            alt="A guy smiling, holding an apple"
            width={600}
            height={400}
            className={styles.combinedImage}
          />
        </div>
      </div>
    </section>
  );
}
