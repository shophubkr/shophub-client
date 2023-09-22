import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StyledToggle = styled(Flex)`
  cursor: pointer;

  & .hamburger {
    width: 32px;
    height: 2px;
    background-color: #ccc;
    border-radius: 999px;
  }

  & > .line-01,
  .line-03 {
    width: 24px;
  }
`;
