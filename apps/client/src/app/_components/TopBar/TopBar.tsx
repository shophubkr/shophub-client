import { Box, Flex } from "@chakra-ui/react";
import { useState, type PropsWithChildren } from "react";
import { SideNavBar } from "./_components/SideNavBar/SideNavBar";

export const TopBar = ({ children }: PropsWithChildren) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <Flex alignItems="center" justifyContent="space-between" padding="16px 0" zIndex="9999">
      <SideNavBar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
      <Box
        className="material-icons-outlined"
        cursor="pointer"
        fontSize="24px"
        onClick={() => {
          setIsOpenSideBar((prev) => !prev);
        }}
      >
        menu
      </Box>
      {children}
      <Box className="material-icons-outlined" fontSize="24px">
        account_circle
      </Box>
    </Flex>
  );
};
