"use client";

import {ChakraProvider} from "@chakra-ui/react";
import {I18nextProvider} from "react-i18next";
import i18n from "@/i18n/client";

export function Providers({children}) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>{children}</ChakraProvider>
    </I18nextProvider>
  );
}
