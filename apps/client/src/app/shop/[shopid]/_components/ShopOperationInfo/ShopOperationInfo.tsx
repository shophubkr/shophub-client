import { Button, Flex } from "@chakra-ui/react";

import { Icon } from "~/components";

export const ShopOperationInfo = () => {
  return (
    <Flex as="ul" flexDir="column" rowGap="16px" m="24px 0">
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <Icon name="location_on" size={16} />
        주소
        <Button p="0 0 0 8px" h="full" bg="none" fontSize="12px" fontWeight="400">
          <Icon name="content_copy" size={14} />
          복사
        </Button>
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <Icon name="schedule" size={16} />
        시간
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <Icon name="call" size={16} />
        전화번호
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="12px" fontWeight="400" as="li">
        <Icon name="tag" size={16} />
        <span>#태그1</span>
        <span>#태그2</span>
        <span>#태그3</span>
      </Flex>
    </Flex>
  );
};
