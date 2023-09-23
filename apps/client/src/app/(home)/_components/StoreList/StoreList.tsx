import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { MainStoreCard } from "~/app/_components/Card/MainStoreCard";
import type { ApiProductType } from "../../_types/apiData.type";
import * as S from "./StoreList.style";

export const StoreList = ({ data }: ApiProductType) => {
  // 이후, 다양한 동적 관리를 위해 isToggle을 recoil로 관리하여
  // Api call을 useEffect로 관리하고, 의존성 배열에 담아야 합니다.
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Center
      position="absolute"
      left="0"
      bottom="0"
      width="100%"
      height={!isToggle ? "88px" : "80vh"}
      alignItems="flex-start"
      bgColor="white"
      boxShadow="0 -4px 8px rgba(0,0,0,0.05)"
      overflow={isToggle ? "scroll" : "hidden"}
      transition="0.75s cubic-bezier(0.165, 0.84, 0.44, 1)"
    >
      <S.StyledToggle
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
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
