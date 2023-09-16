import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { SideNavBar, type SideNavBarHandle } from "./_components/SideNavBar/SideNavBar";

export const TopBar = ({ children }: PropsWithChildren) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const sideNavBarRef = useRef<SideNavBarHandle>(null);

  useEffect(() => {
    if (sideNavBarRef.current) {
      if (isOpenSideBar) {
        sideNavBarRef.current.setTranslateX(0);
      }

      if (!isOpenSideBar) {
        sideNavBarRef.current.setTranslateX(-100);
      }
    }
  }, [isOpenSideBar]);

  return (
    <Flex alignItems="center" justifyContent="space-between" padding="16px 0" zIndex="9999">
      <SideNavBar ref={sideNavBarRef} />
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
