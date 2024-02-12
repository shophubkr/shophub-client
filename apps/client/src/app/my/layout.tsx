"use client";

import { Box, Center } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const MyPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Center>
      <Box width="390px">{children}</Box>
    </Center>
  );
};

export default MyPageLayout;
