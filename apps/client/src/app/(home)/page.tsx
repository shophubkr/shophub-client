"use client";

import { Center, Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { SearchBar } from "../_components/SearchBar/SearchBar";
import { TopBar } from "../_components/TopBar/TopBar";
import { KakaoMap } from "./_components/Map/KakaoMap";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <Center w="90%" minW="358px" m="0 auto">
      <KakaoMap />
      <Flex w="100%" flexDir="column">
        <TopBar>LOGO</TopBar>
        <SearchBar />
      </Flex>
    </Center>
  );
};

export default Main;
