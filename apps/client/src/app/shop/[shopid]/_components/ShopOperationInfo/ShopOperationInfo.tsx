import { Button, Flex } from "@chakra-ui/react";

export const ShopOperationInfo = () => {
  return (
    <Flex as="ul" flexDir="column" rowGap="16px" m="24px 0">
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          location_on
        </span>
        주소
        <Button p="0 0 0 8px" h="full" bg="none" fontSize="12px" fontWeight="400">
          <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
            content_copy
          </span>
          복사
        </Button>
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          schedule
        </span>
        시간
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          call
        </span>
        전화번호
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          tag
        </span>
        <span>#태그1</span>
        <span>#태그2</span>
        <span>#태그3</span>
      </Flex>
    </Flex>
  );
};
