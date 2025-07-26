"use client";
import {useTranslation as useTranslationOriginal} from "react-i18next";

export const useTranslation = (ns = "common") => {
  const {t, i18n} = useTranslationOriginal(ns);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return {t, i18n, changeLanguage};
};
