"use client";

import styles from "./styles.module.scss";
import Container from "../Container";
import {useTranslation} from "react-i18next";

export default function Footer() {
  const {t, i18n} = useTranslation("common");

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h4 className={styles.title}>{t("contactUs")}</h4>
          <div className={styles.contact_row}>
            <div className={styles.contact_item}>
              <span className={styles.label}>{t("email")}:</span>
              <a href="mailto:info@fruitme.uz" className={styles.link}>
                info@fruitme.uz
              </a>
            </div>
            <div className={styles.contact_item}>
              <span className={styles.label}>{t("sales")}:</span>
              <a href="mailto:sales@fruitme.uz" className={styles.link}>
                sales@fruitme.uz
              </a>
            </div>
            <div className={styles.contact_item}>
              <span className={styles.label}>{t("phone")}:</span>
              <a href="tel:+998949519999" className={styles.link}>
                +998 94 951 99 99
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Fruitme. {t("rightsText")}
          </div>
        </div>
      </Container>
    </div>
  );
}