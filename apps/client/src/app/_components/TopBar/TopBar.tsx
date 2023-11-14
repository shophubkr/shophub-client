import { Box, Center, Flex } from "@chakra-ui/react";
import { useState, type PropsWithChildren } from "react";
import { SideNavBar } from "./_components/SideNavBar/SideNavBar";

export const TopBar = ({ children }: PropsWithChildren) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <Flex padding="16px 0">
      <SideNavBar isOpenSideBar={isOpenSideBar} onCloseSideBar={() => !isOpenSideBar && setIsOpenSideBar(false)} />
      <Center w="100%" zIndex="9999" alignItems="center" justifyContent="space-between">
        <Box
          className="material-icons-outlined"
          cursor="pointer"
          onClick={() => {
            setIsOpenSideBar((prev) => !prev);
          }}
        >
          menu
        </Box>
        {children}
        <Box className="material-icons-outlined">account_circle</Box>
      </Center>
    </Flex>
  );
};
