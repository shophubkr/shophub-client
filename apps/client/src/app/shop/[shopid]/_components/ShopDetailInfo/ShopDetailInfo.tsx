import { useShophubTheme } from "@shophub/theme";

import * as Styled from "./ShopDetailInfo.styles";

import { Icon } from "../Icon";

export const ShopDetailInfo = () => {
  const theme = useShophubTheme();

  return (
    <Styled.Container>
      <Styled.Info theme={theme}>
        <Icon label="address" fontSize="16px" color={theme.COLORS.grey[500]} />
        주소
        <Styled.CopyButton theme={theme}>
          <Icon label="copy" fontSize="12px" color={theme.COLORS.grey[500]} />
          복사
        </Styled.CopyButton>
      </Styled.Info>
      <Styled.Info theme={theme}>
        <Icon label="hour" fontSize="16px" color={theme.COLORS.grey[500]} />
        시간
      </Styled.Info>
      <Styled.Info theme={theme}>
        <Icon label="telNum" fontSize="16px" color={theme.COLORS.grey[500]} />
        전화번호
      </Styled.Info>
      <Styled.Info theme={theme}>
        <Icon label="tags" fontSize="16px" color={theme.COLORS.grey[500]} />

        <span>태그1</span>
        <span>태그2</span>
        <span>태그3</span>
      </Styled.Info>
    </Styled.Container>
  );
};
