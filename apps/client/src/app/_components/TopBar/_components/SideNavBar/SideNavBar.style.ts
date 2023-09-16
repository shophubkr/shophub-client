import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SideNavBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: -1;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
