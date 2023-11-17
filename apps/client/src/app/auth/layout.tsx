"use client";

import { Center } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Center w="80%" maxW="312px" m="80px auto">
      {children}
    </Center>
  );
};

export default AuthLayout;
