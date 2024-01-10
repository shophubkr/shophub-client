"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { Modal } from "@shophub/ui/src/Modal/Modal";

import type { EssentialModalProps } from "@shophub/ui/src/Modal/Modal.types";

import * as Styled from "./CouponListModal.styles";

import { Icon } from "../Icon";
import { useCouponListModalState } from "../../_states/client/couponModal.state";

export const CouponListModal = () => {
  const theme = useShophubTheme();
  const [isCouponListModal, setIsCouponListModal] = useCouponListModalState();

  const [isIssuanceModal, setIsIssuanceModal] = useState<boolean>(false);
  const [issuanceModalProps, setIssuanceModalProps] = useState<EssentialModalProps>({
    type: "positive",
    title: "",
    onConfirm: () => {},
  });

  const handleCloseIssuanceModal = () => setIsIssuanceModal(false);

  return (
    <>
      <Modal isOpen={isIssuanceModal} onClose={handleCloseIssuanceModal} props={issuanceModalProps} />

      <Styled.Modal open={isCouponListModal} onClose={() => setIsCouponListModal(false)}>
        <Styled.Header theme={theme}>
          <span style={{ width: "24px" }} />
          쿠폰
          <button onClick={() => setIsCouponListModal(false)}>
            <Icon label="close" fontSize="24px" color={theme.COLORS.black} />
          </button>
        </Styled.Header>

        <Box p="24px 16px" display="flex" flexDir="column" gap="24px" as="ul" h="calc(100vh - 57px)" overflow="scroll">
          <Styled.Coupon>
            <Styled.Summary theme={theme}>
              <div>10,000원</div>
              <div>[그래비티] 초대박 할인 쿠폰</div>
            </Styled.Summary>
            <Styled.Detail theme={theme}>
              <div>[그래비티] 초대박 할인 쿠폰</div>
              <div> 50,000원 이상 구매 시 사용 가능</div>
              <div>유효 기간 : ~ 2023-12-13</div>
            </Styled.Detail>
          </Styled.Coupon>
        </Box>
      </Styled.Modal>
    </>
  );
};
