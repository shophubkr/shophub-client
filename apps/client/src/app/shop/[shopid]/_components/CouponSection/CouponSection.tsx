import { Button, Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";

import { Icon } from "../Icon";
import { useCouponListModalState } from "../../_states/client/couponModal.state";
import { CouponListModal } from "../CouponListModal";

export const CouponSection = () => {
  const theme = useShophubTheme();
  const [isCouponListModal, setIsCouponListModal] = useCouponListModalState();

  const handleOpenCouponListModal = () => setIsCouponListModal(true);

  return (
    <>
      <div>
        <Flex
          bg="black"
          borderRadius="4px"
          alignItems="center"
          m="24px 0 16px 0"
          p="4px 8px"
          gap="4px"
          color={theme.COLORS.white}
          style={{ font: theme.FONTS.p14r }}
        >
          <Icon label="calendar" fontSize="14px" color={theme.COLORS.white} />
          쿠폰 만료 3일 남았어요
        </Flex>
        <Button
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          p="8px 16px"
          bg={theme.COLORS.grey[200]}
          color={theme.COLORS.black}
          style={{ font: theme.FONTS.medium }}
          onClick={handleOpenCouponListModal}
        >
          최대 10,000원 초대박 할인
          <Icon label="expandMore" fontSize="16px" color={theme.COLORS.black} />
        </Button>
      </div>
      {isCouponListModal && <CouponListModal />}
    </>
  );
};
