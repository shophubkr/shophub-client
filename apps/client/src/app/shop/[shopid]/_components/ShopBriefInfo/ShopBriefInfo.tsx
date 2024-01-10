import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";

import * as Styled from "./ShopBriefInfo.styles";

export const ShopBriefInfo = () => {
  const theme = useShophubTheme();

  return (
    <Flex direction="column" flex="1">
      <Flex align="center" mb="12px" gap="8px">
        <Styled.LogoImageWrapper>
          <Image src="https://picsum.photos/200" alt="가게로고" fill priority />
        </Styled.LogoImageWrapper>
        <Flex align="baseline" gap="8px">
          <Styled.Name theme={theme}>가게이름</Styled.Name>
          <Styled.Level theme={theme}>가게레벨</Styled.Level>
        </Flex>
      </Flex>
      <Styled.Description theme={theme}>가게소개</Styled.Description>
    </Flex>
  );
};
