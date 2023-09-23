import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SideNavProps {
  isOpenSideBar: boolean;
  setIsOpenSideBar: (value: boolean) => void;
}

const SideBarNavigationList = [
  {
    title: "프로필 관리",
    url: "",
  },
  {
    title: "마이 페이지",
    url: "",
  },
  {
    title: "팔로잉 매장",
    url: "",
  },
  {
    title: "쿠폰함",
    url: "",
  },
];

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
      zIndex="9998"
      transform={`translateX(${isOpenSideBar ? "0%" : "-100%"})`}
      transition="1s cubic-bezier(0.165, 0.84, 0.44, 1)"
    >
      <Center h="100%" flexDir="column" justifyContent="center" rowGap="112px" fontSize="20px" fontWeight="bold">
        {SideBarNavigationList.map((it) => {
          return (
            <Link href={it.url} key={it.title}>
              <Text as="h4">{it.title}</Text>
            </Link>
          );
        })}
      </Center>
    </Box>
  );
};
