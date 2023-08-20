import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button } from "~/components";

export const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;
  text-align: center;
`;

export const UserTypeContainer = styled(Flex)`
  width: 100%;
  height: 149px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 149px;
  margin-top: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;