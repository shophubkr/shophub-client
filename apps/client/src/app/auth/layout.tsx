"use client";

import { Center } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <Center m="80px auto">{children}</Center>;
};

export default AuthLayout;
