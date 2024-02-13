"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type PropsWithChildren } from "react";

import { ModalProvider } from "@shophub/ui";
import { RecoilRoot } from "recoil";
import initMocks from "../mocks";
import { QueryClientProvider } from "./shared/server";
import { useChakraTheme } from "./theme";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  initMocks();
}

export const Providers = ({ children }: PropsWithChildren) => {
  const chakraTheme = useChakraTheme();

  return (
    <QueryClientProvider>
      <RecoilRoot>
        <ModalProvider>
          <CacheProvider>
            <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
          </CacheProvider>
        </ModalProvider>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
