"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type PropsWithChildren } from "react";

import initMocks from "../mocks";
import { QueryClientProvider } from "./shared/server";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  initMocks();
}

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
