"use client";

import type { ContainerProps } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";

const baseLayoutCSS: ContainerProps = {
  maxW: "390px",
  m: "0 auto",
};

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container as="main" {...baseLayoutCSS}>
      {children}
    </Container>
  );
};
