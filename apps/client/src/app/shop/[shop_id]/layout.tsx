"use client";

import { Container } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <Container w="390px" p="16px">
      {children}
    </Container>
  );
};

export default layout;
