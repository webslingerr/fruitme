"use client";

import styles from "./styles.module.scss";
import {fruitBaskets} from "./mock";
import Image from "next/image";
import {useTranslation} from "react-i18next";

export default function FruitBasketCards() {
  const {t, i18n} = useTranslation("common");

  return (
    <div id="fruitPlan" className={styles.plan}>
      <div className={styles.header}>
        <h2>{t("fruitBasketsText")}</h2>
      </div>
      <div className={styles.main}>
        {fruitBaskets.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <Image
                width={284}
                height={284}
                src={item.image}
                alt={item.title}
                className={styles.mainImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h4>{item.title}</h4>
              </div>
              <div className={styles.cardDesc}>
                <p className={styles.description}>{t("basketDesc")}</p>
                <div className={styles.price}>
                  <p>
                    <strong>{item.price}</strong>
                  </p>
                  <p> sum </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
