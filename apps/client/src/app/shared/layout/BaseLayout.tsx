"use client";

import { Container, css } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";

const baseLayoutCSS = css({
  maxW: "390px",
  m: "0 auto",
});

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return <Container {...baseLayoutCSS}>{children}</Container>;
};
