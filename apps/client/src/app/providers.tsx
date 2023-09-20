"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState, type PropsWithChildren } from "react";
import { initMocks } from "~/mocks";

// 환경변수로 msw를 핸들링한 이유 : 초기 렌더링 => SSR
const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  const [mswReady, setMSWReady] = useState(!isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        await initMocks();
        setMSWReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
