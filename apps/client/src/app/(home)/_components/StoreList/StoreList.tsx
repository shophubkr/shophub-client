import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { MainStoreCard } from "~/app/_components/Card/MainStoreCard";
import type { ApiProductType } from "../../_types/apiData.type";
import * as S from "./StoreList.style";

export const StoreList = ({ data }: ApiProductType) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Center
      position="absolute"
      left="0"
      bottom="0"
      width="100%"
      height={!isToggle ? "88px" : "80vh"}
      bgColor="white"
      overflow={isToggle ? "scroll" : "hidden"}
      transition="0.75s cubic-bezier(0.165, 0.84, 0.44, 1)"
    >
      <S.StyledToggle
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        zIndex="9999"
        top="0"
        h="40px"
        padding="13px 0"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <div className="hamburger line-01" />
        <div className="hamburger line-02" />
        <div className="hamburger line-03" />
      </S.StyledToggle>
      <MainStoreCard data={data} />
    </Center>
  );
};
