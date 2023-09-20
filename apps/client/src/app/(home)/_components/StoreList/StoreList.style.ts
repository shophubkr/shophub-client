import { Center, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StyledCenter = styled(Center)`
  transition: 0.75s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

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
