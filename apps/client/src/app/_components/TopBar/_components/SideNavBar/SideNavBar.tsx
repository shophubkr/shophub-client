import { Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { forwardRef, useImperativeHandle, useRef } from "react";
import * as S from "./SideNavBar.style";

export interface SideNavBarHandle {
  setTranslateX: (value: number) => void;
}

export const SideNavBar = forwardRef<SideNavBarHandle>((props, ref) => {
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    setTranslateX: (value) => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${value}%)`;
      }
    },
  }));

  return (
    <S.SideNavBarWrapper ref={sliderRef}>
      <Center h="100%" flexDir="column" justifyContent="center" rowGap="112px">
        <S.StyledText as="h4">프로필 관리</S.StyledText>
        <S.StyledText as="h4">마이 페이지</S.StyledText>
        <S.StyledText as="h4">팔로잉 매장</S.StyledText>
        <S.StyledText as="h4">쿠폰함</S.StyledText>
      </Center>
    </S.SideNavBarWrapper>
  );
});
