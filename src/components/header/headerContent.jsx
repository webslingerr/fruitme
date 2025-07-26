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

let scrollThreshold = [0, 2];

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
  let {scrollY} = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef();
  let lastScrollDirection = useRef();
  let pixelsScrolled = useMotionValue(0);
  let transform = useTransform(pixelsScrolled, scrollThreshold, [0, -80]);
  let transformMotion = useMotionTemplate`${transform}px`;
  const [open, setOpen] = useState();
  const {t, i18n} = useTranslation("common");

  const computedLang = useMemo(() => {
    return languages?.find((item) => item?.lang === i18n?.language);
  }, [languages, i18n?.language]);

  useEffect(() => {
    function handleChange(latest) {
      if (latest < 0) return;

      setOpen(false);
      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);
      lastScrollDirection.current = scrollDirection;
    }

    const scrollChange = scrollY.on("change", handleChange);
    return () => scrollChange();
  }, [pixelsScrolled, scrollY]);

  return (
    <>
      <Animation
        className={styles.framerHeader}
        style={{
          y: transformMotion,
        }}>
        <Box className={styles.navbar}>
          <div className={styles.leftSide}>
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
          </div>
          <div className={styles.rightSide}>
            <div className={styles.btn_group}>
              <Menu>
                <MenuButton
                  w={"40px"}
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  variant="outline"
                  size="sm">
                  {
                    <Flex alignItems={"center"} gap={2}>
                      <Image src={computedLang?.icon} width={20} height={20} />
                      {/* <Text>{computedLang?.label}</Text> */}
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
            </div>

            {/* <div
              className={styles.icon_box}
              onClick={() => setOpen((prev) => !prev)}>
              {open ? <CloseIcon /> : <BurgerIcon />}
            </div> */}
          </div>
        </Box>
      </Animation>
      {open && <BurgerContent />}
    </>
  );
}
