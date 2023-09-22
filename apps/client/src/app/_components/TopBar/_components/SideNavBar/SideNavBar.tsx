import { Box, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SideNavProps {
  isOpenSideBar: boolean;
  setIsOpenSideBar: (value: boolean) => void;
}

export const SideNavBar = ({ isOpenSideBar, setIsOpenSideBar }: SideNavProps) => {
  const router = useRouter();
  const currentUrl = window.location.href;

  useEffect(() => {
    setIsOpenSideBar(false);
  }, [currentUrl, setIsOpenSideBar]);

  return (
    <Box
      position="absolute"
      w="100%"
      h="100vh"
      top="0"
      left="0"
      bgColor="white"
      zIndex="-1"
      transform={`translateX(${isOpenSideBar ? "0%" : "-100%"})`}
      transition="1s cubic-bezier(0.165, 0.84, 0.44, 1)"
    >
      <Center h="100%" flexDir="column" justifyContent="center" rowGap="112px" fontSize="20px" fontWeight="bold">
        <Text as="h4">프로필 관리</Text>
        <Text as="h4">마이 페이지</Text>
        <Text as="h4">팔로잉 매장</Text>
        <Text as="h4">쿠폰함</Text>
      </Center>
    </Box>
  );
};
