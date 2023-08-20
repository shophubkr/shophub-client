import styled from "@emotion/styled";
import { Button } from "~/components";

export const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;

  & > h3 {
    text-align: center;
  }

  & > form {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;
