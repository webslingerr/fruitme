"use client";

import styles from "@/components/header/styles.module.scss";
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
import Image from "next/image";
import Link from "next/link";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";

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

export default function BurgerContent() {
  const {t, i18n} = useTranslation("common");

  const computedLang = useMemo(() => {
    return languages?.find((item) => item?.lang === i18n?.language);
  }, [languages, i18n?.language]);
  return (
    <Box className={styles.burger}>
      <nav className={styles.list}>
        <Menu>
          <MenuButton
            w={"110px"}
            marginLeft={4}
            as={Button}
            // rightIcon={<ChevronDownIcon />}
            variant="outline"
            size="sm">
            {
              <Flex alignItems={"center"} gap={2}>
                <Image src={computedLang?.icon} width={20} height={20} />
                <Text>{computedLang?.label}</Text>
              </Flex>
            }
          </MenuButton>
          <MenuList minW="150px">
            {languages.map((lang, idx) => (
              <MenuItem
                onClick={() => i18n.changeLanguage(lang?.lang)}
                key={idx}>
                <Flex align="center" gap="8px">
                  <Image
                    width={16}
                    height={16}
                    src={lang.icon}
                    alt={lang.label}
                    boxSize="20px"
                  />
                  {lang.label}
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Link href="#fruitPlan" className={styles.navLink}>
          <Image
            src="/images/apple-crate.svg"
            alt="Fruktkorgar"
            width={24}
            height={24}
          />
          <p>{t("fruktkorgar")}</p>
        </Link>
        <Link href="#fruitPlan" className={styles.navLink}>
          <Image
            src="/images/shop.svg"
            alt="Vårt sortiment"
            width={24}
            height={24}
          />
          <p>{t("sortiment")}</p>
        </Link>
        <Link href="#aboutus" className={styles.navLink}>
          <Image
            src="/images/hand-holding-seeding.svg"
            alt="Om oss"
            width={24}
            height={24}
          />
          <p>{t("om_oss")}</p>
        </Link>
        <Link href="#" className={styles.navLink}>
          <Image
            src="/images/user-headset.svg"
            alt="Kundcenter"
            width={24}
            height={24}
          />
          <p>{t("kindcenter")}</p>
        </Link>
        <Link href="#" className={styles.navLink}>
          <Image
            src="/images/comment-alt.svg"
            alt="Blogg"
            width={24}
            height={24}
          />
          <p>{t("kategorier")}</p>
        </Link>
        <Link href="#" className={styles.navLink}>
          <Image
            src="/images/person-carry-box.svg"
            alt="Kategorier"
            width={24}
            height={24}
          />
          <p>{t("varukorg")}</p>
        </Link>
      </nav>
    </Box>
  );
}
