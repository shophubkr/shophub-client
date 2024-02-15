"use client";

import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const FollowListLayout = ({ children }: PropsWithChildren) => {
  return <Container px="16px">{children}</Container>;
};

export default FollowListLayout;
