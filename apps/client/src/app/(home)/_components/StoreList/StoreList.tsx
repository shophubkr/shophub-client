import { useState } from "react";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import * as S from "./StoreList.style";

export const StoreList = ({ data }: { data: ProductType[] }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <S.StyledCenter
      position="absolute"
      left="0"
      bottom="0"
      width="100%"
      height={!isToggle ? "88px" : "80vh"}
      bgColor="white"
    >
      <S.StyledToggle
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        top="0"
        h="40px"
        padding="13px 0"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <div className="hamburger line-01" />
        <div className="hamburger line-02" />
        <div className="hamburger line-03" />
      </S.StyledToggle>
      {/* 매장 리스트 on/off */}
      {isToggle && <p>StoreItem이 Card UI로 들어올 예정</p>}
    </S.StyledCenter>
  );
};
