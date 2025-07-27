"use client";

import styles from "@/components/header/styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Animation} from "@/utils/animation";
import {
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import {useEffect, useMemo, useRef, useState} from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {BurgerIcon, CloseIcon} from "@/assets/icons";
import BurgerContent from "./BurgerContent";
import {useTranslation} from "@/hooks/useTranslation";

const languages = [
  {
    label: "Russian",
    icon: "/images/russianflag.svg",
    lang: "ru",
  },
  {
    label: "English",
    icon: "/images/englishflag.svg",
    lang: "en",
  },
  {
    label: "Uzbek",
    icon: "/images/uzbekflag.svg",
    lang: "uz",
  },
];

export default function HeaderContent() {
  const { i18n } = useTranslation("common");

  const computedLang = useMemo(() => {
    return languages?.find((item) => item?.lang === i18n?.language);
  }, [i18n?.language]);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* <div className={styles.leftSide}>
          <Link href={"/"} className={styles.logoContainer}>
            <Image
              src="/images/logo.png"
              alt="Fruitme Logo"
              className={styles.logo}
              width={172}
              height={100}
              priority
            />
          </Link>
        </div> */}
        <div className={styles.rightSide}>
          <Menu>
            <MenuButton
              as={Button}
              variant="outline"
              className={styles.languageButton}
            >
              <Flex alignItems="center" gap={2}>
                <Image 
                  src={computedLang?.icon} 
                  width={20} 
                  height={20} 
                  alt={computedLang?.label}
                />
              </Flex>
            </MenuButton>
            <MenuList className={styles.languageMenu}>
              {languages.map((lang, idx) => (
                <MenuItem
                  onClick={() => i18n.changeLanguage(lang?.lang)}
                  key={idx}
                >
                  <Flex align="center" gap="8px">
                    <Image
                      width={16}
                      height={16}
                      src={lang.icon}
                      alt={lang.label}
                    />
                    {lang.label}
                  </Flex>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
}