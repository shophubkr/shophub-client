"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import initMocks from "../mocks";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  initMocks();
}

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
